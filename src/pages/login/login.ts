import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FeedPage } from '../feed/feed';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  redirectTo_SignUp(){
    this.navCtrl.push(SignupPage);
  }

  redirectTo_feed(){

    if(!this.email || !this.password){
      const alert = this.alertCtrl.create({
        subTitle: "Please fill all the fields",
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.setRoot(FeedPage);
    }

  }

  redirectTo_forgotpwd(){
    console.log('Clicked');
    // this.navCtrl.push('');
  }
}
