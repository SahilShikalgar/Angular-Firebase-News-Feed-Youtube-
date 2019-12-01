import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/News';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  newsData: News[] = [];
  allowedChannelIDs = ['the-times-of-india', 'abc-news-au', 'bbc-news', 'bbc-sport', 'cnn', 'usa-today', 'time'];
  subscription: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.channelChange({ 'target': { value: this.allowedChannelIDs[0] } } );

    this.subscription = this.newsService.channelChangeSubject.subscribe(event => {
      this.channelChange(event);
    });
  }

  async channelChange(event) {
    this.newsData = [];
    await this.newsService.getNewsDataForSelectedChannel(event.target.value)
      .subscribe(data => {
        this.newsData = data['articles'];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
