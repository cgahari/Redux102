import {ADD_ARTICLE} from '../constants/action-types'
import {ADD_COMMENT} from '../constants/action-types'

const initialState = {
    articles: []
  };
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ARTICLE:
        return {...state, articles: [...state.articles, action.payload]};
      default:
        return state;
    }
  };

  const initialState2 = {
    comments: []
  };
  export const mathReducer = (state = initialState2, action) => {
    switch (action.type) {
      case ADD_COMMENT:
        return {...state, comments: [...state.comments, action.payload]};
      default:
        return state;
    }
  };
  export default rootReducer;