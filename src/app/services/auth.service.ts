import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  subject = new Subject();
  isAdmin: boolean;

  trackLoginStatus() {
    return this.subject.asObservable();
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    this.subject.next(false);
    this.router.navigate(['/']);
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      email === "admin@gmail.com" ? this.isAdmin = true : this.isAdmin = false;
      localStorage.setItem("isAdmin", JSON.stringify(this.isAdmin));
      this.subject.next(true);
      this.router.navigate(['news']);
    } catch(e) {
      console.log(e.message);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    user !== null ? this.user = user : this.user = null;
    return this.user !== null;
  }

  get isUserAdmin(): boolean {
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    return this.isAdmin;
  }
}
