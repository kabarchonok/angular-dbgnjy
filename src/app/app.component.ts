import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-wiki-search';

  theme: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.theme = this.store.select(state => state.theme);
  }


}
