import {ArticleModel} from './article.model';

export interface ArticlesModel {
  loading: boolean;
  articles: ArticleModel[];
}
