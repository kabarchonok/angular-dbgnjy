import {Action} from '@ngrx/store';
import {ThemeModel} from '../models/theme.model';

export const SET_THEME = 'SET_THEME';

export class SetTheme implements Action {
  readonly type = SET_THEME;

  constructor(public payload: ThemeModel) {}
}

export type Actions = SetTheme;
