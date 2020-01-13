import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-article-preview]',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article;
  private wordtime: number;

  constructor() {
  }

  ngOnInit() {
    this.wordtime = Math.round(this.article.wordcount / 160);
  }

}
