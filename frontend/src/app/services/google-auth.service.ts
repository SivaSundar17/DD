import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  user!:SocialUser;
  loggedIn: any;

  constructor(private authService: SocialAuthService) { 
  }

  currentUser():SocialUser{
    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
      // localStorage.setItem("SocialUser",s)
    });
    return this.user;

  }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        console.log(user);
        // You can access user information here
      })
      .catch((error) => {
        console.error(error);
      });
  }

  signOut(){
    this.authService.signOut();
  }
}
