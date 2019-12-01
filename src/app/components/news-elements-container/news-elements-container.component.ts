import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../model/News';

@Component({
  selector: 'app-news-elements-container',
  templateUrl: './news-elements-container.component.html',
  styleUrls: ['./news-elements-container.component.css']
})
export class NewsElementsContainerComponent implements OnInit {
  @Input() newsData: News[];
  constructor() { }

  ngOnInit() {
  }

}
