import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ArticleModel} from '../store/models/article.model';
import {AppState} from '../store/reducers';

@Component({
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articles: Observable<ArticleModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles = this.store.select(state => state.articlesList.articles);
  }

}
