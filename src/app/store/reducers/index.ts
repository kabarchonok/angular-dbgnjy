import {ArticlesModel} from '../models/articles.model';
import {ThemeModel} from '../models/theme.model';

export interface AppState {
  readonly theme: ThemeModel;
  readonly articlesList: ArticlesModel;
}
