import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from "../pages/login/login";

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.zone = new NgZone({});

    firebase.initializeApp({
      apiKey: "AIzaSyBVICyIOsm_I1xuoKgTPaO3xroay8LaKms",
      authDomain: "eventtutorial-9b49e.firebaseapp.com",
      databaseURL: "https://eventtutorial-9b49e.firebaseio.com",
      projectId: "eventtutorial-9b49e",
      storageBucket: "eventtutorial-9b49e.appspot.com",
      messagingSenderId: "162790658279"
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    const unsubcribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (!user) {
          this.rootPage = Login;
          unsubcribe();
        } else {
          this.rootPage = HomePage;
          unsubcribe();
        }
      })
    });


  }
}

