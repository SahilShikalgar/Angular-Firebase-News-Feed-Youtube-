import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { News } from '../model/News';
import { Channel } from '../model/Channel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsDataObservable;
  newsData: News[];
  newsChannelObservable;
  channelChangeSubject = new Subject();

  constructor(private http: HttpClient) {
    this.newsChannelObservable = this.http.get<Channel[]>('https://newsapi.org/v2/sources?apiKey=e75b3b166d3a4016959d2aa98179cbed');
  }

  getNewsChannels(): Observable<Channel[]> {
    return this.newsChannelObservable;
  }

  getNewsDataForSelectedChannel(channelId: string): Observable<News[]> {
    this.newsDataObservable = this.http.get<News[]>('https://newsapi.org/v1/articles?source=' + channelId +'&apiKey=e75b3b166d3a4016959d2aa98179cbed');
    this.saveData();
    return this.newsDataObservable;
  }

  saveData() {
    this.newsDataObservable.subscribe(data => {
      this.newsData = data['articles'];
    });
  }

  getSelectedNews(newsId) {
    let data;
    this.newsData ?
      data = this.newsData[newsId]
      :
      null;
    return data;
  }
}
