import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.trackLoginStatus().subscribe(status => {
      this.isLoggedIn = Boolean(status);
    });
  }

  logout() {
    this.auth.logout();
  }
}
