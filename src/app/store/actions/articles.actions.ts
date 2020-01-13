import {Action} from '@ngrx/store';
import {ArticleModel} from '../models/article.model';

export const SET_LOADING = 'SET_LOADING';
export const ADD_ARTICLES = 'ADD_ARTICLES';
export const REMOVE_ARTICLES = 'REMOVE_ARTICLES';

export class SetLoading implements Action {
  readonly type = SET_LOADING;

  constructor(public payload: boolean) {}
}

export class AddArticles implements Action {
  readonly type = ADD_ARTICLES;

  constructor(public payload: ArticleModel[]) {}
}

export class RemoveArticles implements Action {
  readonly type = REMOVE_ARTICLES;
}

export type Actions = SetLoading | AddArticles | RemoveArticles;
