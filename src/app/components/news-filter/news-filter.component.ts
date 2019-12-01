import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Channel } from '../../model/Channel';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.css']
})
export class NewsFilterComponent implements OnInit {
  allowedChannelIDs = ['the-times-of-india', 'abc-news-au', 'bbc-news', 'bbc-sport', 'cnn', 'usa-today', 'time'];
  newsChannels: Channel[] = [];
  constructor(private newsService: NewsService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNewsChannels()
      .subscribe(data => {
        this.newsChannels = data['sources'].filter(channel => this.allowedChannelIDs.includes(channel.id));
      });
  }

  onChannelChanged(event) {
    this.newsService.channelChangeSubject.next(event);
  }

  onAddNews() {
    this.router.navigate(['/add-news']);
  }
}
