import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../../model/News';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent implements OnInit {
  @Input() news: News;
  @Input() index: Number;
  hide = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showNgContent() {
    this.hide = !this.hide;
  }

  onContinueReading() {
    this.router.navigate(['news/' + this.index]);
  }
}
