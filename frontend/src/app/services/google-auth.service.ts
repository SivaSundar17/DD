import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  user!: any;
  loggedIn: any;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
  }

  // currentUser():SocialUser{
  //   this.authService.authState.subscribe((user) => {

  //     this.user = user;
  //     this.loggedIn = (user != null);
  //     console.log(user);
  //     // localStorage.setItem("SocialUser",s)
  //   });
  //   return this.user;

  // }

  // signIn(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then((user) => {
  //       console.log(user);
  //       // You can access user information here
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // signOut(){
  //   this.authService.signOut();
  // }

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      // this.router.navigate(['/home']);
      this.user = res.user;
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('token', JSON.stringify(res.user?.uid));


    }, err => {
      alert(err.message);
    })
  }
  googleSignOut() {
    this.fireauth.signOut()
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('User signed out successfully');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  }
}
