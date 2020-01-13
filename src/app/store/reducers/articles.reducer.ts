import * as ArticlesActions from '../actions/articles.actions';
import {ArticlesModel} from '../models/articles.model';

const initialState: ArticlesModel = {
  loading: false,
  articles: []
};

export function articlesReducer(state: ArticlesModel = initialState, action: ArticlesActions.Actions) {
  switch (action.type) {
    case ArticlesActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case ArticlesActions.ADD_ARTICLES:
      return {
        ...state,
        articles: [...action.payload]
      };
    case ArticlesActions.REMOVE_ARTICLES:
      return {
        ...state,
        articles: []
      };
    default:
      return state;
  }
}
