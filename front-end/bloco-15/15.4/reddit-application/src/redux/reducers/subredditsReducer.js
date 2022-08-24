import { ERROR, GET_SUBREDDIT, REQUEST } from '../actions';

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: null,
};

const subredditsReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GET_SUBREDDIT:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default subredditsReducer;
