import React, { Component } from 'react';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  state = {
    email: '',
    saveEmail: ''
  }

  changeEmail = (value) => {
    this.setState({ email: value });
  }

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input 
            id="id-email" 
            type="email" 
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-send" 
          data-testid="id-send" 
          type="button" 
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) } 
        />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
