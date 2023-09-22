import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'src/app/services/google-auth.service';
// import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';


@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  constructor(private gAuth :GoogleAuthService) { }

  ngOnInit(): void {

    (globalThis as any).handleCallBack = (response:any) => {
      // Handle the response here
      console.log('Received credential response:', response);
      //api call or jwt decode or any other logics will go here

    }; 
  }

  signInWithGoogle(){
    this.gAuth.googleSignIn();
  }

  signOutFromGoogle(){
    this.gAuth.googleSignOut();
  }

  



}
