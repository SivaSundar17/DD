import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  // user!: any;
  loggedIn: any;
  modal: ModalComponent = new ModalComponent();

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

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
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        // this.router.navigate(['/home']);
        this.modal.closeModal();
        window.location.reload();
        // this.user = res.user;
        localStorage.setItem('userPhoto', '' + res.user?.photoURL);
        // localStorage.setItem('token', JSON.stringify(res.user?.uid));
        console.log(res.user?.photoURL);

        localStorage.setItem('userName', '' + res.user?.displayName);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  googleSignOut() {
    this.fireauth
      .signOut()
      .then(() => {
        localStorage.removeItem('token');
        // localStorage.removeItem('user');
        localStorage.removeItem('userPhoto');
        localStorage.removeItem('userName');
        alert('User signed out successfully');
      })
      .catch((error) => {
        alert('Error signing out:' + error);
      });
  }
}
