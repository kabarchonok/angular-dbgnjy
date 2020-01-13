import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContentComponent } from './content/content.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {articlesReducer} from './store/reducers/articles.reducer';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {themeReducer} from './store/reducers/theme.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    ContentComponent,
    ArticlePreviewComponent,
    FooterComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot({
      theme: themeReducer,
      articlesList: articlesReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
