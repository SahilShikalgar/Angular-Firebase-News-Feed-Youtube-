import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'news', component: DashboardComponent },
  { path: 'news/:id', component: ViewNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
