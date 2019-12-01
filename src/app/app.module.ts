import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsElementsContainerComponent } from './components/news-elements-container/news-elements-container.component';
import { NewsElementComponent } from './components/news-elements-container/news-element/news-element.component';
import { NewsFilterComponent } from './components/news-filter/news-filter.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';

const appConfig = {
  firebaseConfig: {
      apiKey: "AIzaSyBkr7OK2RoN_-OWvdVKw6buNeFmhgJEKqM",
      authDomain: "news-feed-9341d.firebaseapp.com",
      databaseURL: "https://news-feed-9341d.firebaseio.com",
      projectId: "news-feed-9341d",
      storageBucket: "news-feed-9341d.appspot.com",
      messagingSenderId: "1092115196494",
      appId: "1:1092115196494:web:d619564a6bffe672c0711f"
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    NewsElementsContainerComponent,
    NewsElementComponent,
    NewsFilterComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(appConfig.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
