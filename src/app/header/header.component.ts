import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {Observable} from 'rxjs';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loading = this.store.select(state => state.articlesList.loading);
  }

}
