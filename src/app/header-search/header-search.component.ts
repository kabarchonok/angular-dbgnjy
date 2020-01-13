import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import * as ArticlesActions from '../store/actions/articles.actions';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  public query = new FormControl();
  public options: string[] = [];
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.filteredOptions = this.query.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  search() {
    if (!this.query.value) { return false; }
    const query = this.query.value.replace(/\s{2,}/g, ' ');

    this.store.dispatch( new ArticlesActions.SetLoading(true));
    this.http.jsonp(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&prop=info&inprop=url&utf8=&format=json`, 'callback')
      .subscribe((data: any) => {
        const articles = data.query.search;

        if (articles.length) { this.saveQuery(query); } // Если по запросу есть статьи, сохраняем запрос

        this.store.dispatch( new ArticlesActions.AddArticles(articles));
        this.store.dispatch( new ArticlesActions.SetLoading(false));
      });
  }

  saveQuery(query) {
    if (typeof this.options.find(e => e.toLowerCase() === query.toLowerCase()) === 'undefined') {
      this.options.push(query);
    }
  }
}
