import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthData } from "../../providers/auth-data";

/**
 * Generated class for the ResetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPassword {

  public resetPasswordForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingController: LoadingController) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])]
    });
  }

  ResetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value.email);
    } else {
      this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
        let alert = this.alertCtrl.create({
          message: "We just sent you a reset link to your email",
          buttons: [
            {
              text: "Ok",
              role: "cancel",
              handler: () => {
                this.navCtrl.pop;
              }
            }
          ]
        });
        alert.present();
      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: "Ok",
              role: "cancel"
            }
          ]
        });
        errorAlert.present();
      });
    }
  }
}
