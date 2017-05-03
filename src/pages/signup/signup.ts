import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthData } from "../../providers/auth-data";
import { HomePage } from "../home/home";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  public signupForm;
  public loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingController: LoadingController) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(HomePage);
        });
      }, (error) => {
        this.loading.dismiss().then(() => {
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

}
