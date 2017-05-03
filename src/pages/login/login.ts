import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthData } from "../../providers/auth-data";
import { Signup } from "../signup/signup";
import { HomePage } from "../home/home";
import { ResetPassword } from "../reset-password/reset-password";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public loginForm;
  public loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingController: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

loginUser() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
  } else {
    this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(HomePage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: "cancel"
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingController.create();
    this.loading.present();
  }
}

goToSignup() {
  this.navCtrl.push(Signup);
}

goToResetPassword() {
  this.navCtrl.push(ResetPassword);
}
}
