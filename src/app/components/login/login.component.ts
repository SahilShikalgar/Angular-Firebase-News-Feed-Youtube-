import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authervice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authervice.isLoggedIn ? this.router.navigate(['news']) : null;
  }

  login() {
    this.authervice.login(this.email, this.password);
  }
}
