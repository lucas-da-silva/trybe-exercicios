import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from '../App';
import clickReducer from '../store/reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store}
);

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('reducer with default value, one click on the button works', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('counter starts with inital value 10, click onthe button works', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10}}});
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('12')).toBeInTheDocument();
  })
});
