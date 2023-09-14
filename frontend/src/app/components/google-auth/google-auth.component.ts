import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { GoogleAuthService } from 'src/app/services/google-auth.service';
import{GoogleUser} from'src/app/model/GoogleUser';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css'],
})
export class GoogleAuthComponent implements OnInit {
  GoogleLoginProvider = GoogleLoginProvider;
  user!: SocialUser;
  loggedIn: any;
  constructor(private authService: SocialAuthService,private googleAuthService:GoogleAuthService)
    { }

  ngOnInit(): void {
    
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user)
    // });
   this.user= this.googleAuthService.currentUser();
   localStorage.setItem("socialUser",JSON.stringify(this.user));
  }
  signIn(): void {
    this.googleAuthService.signIn();
  }
  signOut(): void {
    // this.authService.signOut();
    this.googleAuthService.signOut();
  }
  signedIn(){
    console.log("hii");
    
  }
}
