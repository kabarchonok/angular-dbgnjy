import { Component, OnInit } from '@angular/core';
import {AppState} from '../store/reducers';
import { Store } from '@ngrx/store';
import * as ThemeActions from '../store/actions/theme.actions';
import {ThemeModel} from '../store/models/theme.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {

  theme: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.theme = this.store.select(store => store.theme);
  }

  setTheme(theme: ThemeModel) {
    this.store.dispatch( new ThemeActions.SetTheme(theme));
  }

}
