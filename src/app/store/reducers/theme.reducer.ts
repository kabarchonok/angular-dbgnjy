import {ThemeModel} from '../models/theme.model';
import * as ThemeActions from '../actions/theme.actions';

const initialState: ThemeModel = 'default';

export function themeReducer(state: ThemeModel = initialState, action: ThemeActions.Actions) {
  switch (action.type) {
    case ThemeActions.SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
