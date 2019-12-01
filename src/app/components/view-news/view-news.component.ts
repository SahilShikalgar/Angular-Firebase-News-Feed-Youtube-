import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../model/News';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
  news: News;
  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.news = this.newsService.getSelectedNews(data.id);
      console.log(data);
      console.log(this.news);
      if (this.news === undefined)
        this.router.navigate(['news']);
    });
  }

  backToDashboard() {
    this.router.navigate(['news']);
  }
}
