import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventDetail } from "../pages/event-detail/event-detail";
import { EventCreate } from "../pages/event-create/event-create";
import { EventList } from "../pages/event-list/event-list";
import { Login } from "../pages/login/login";
import { ResetPassword } from "../pages/reset-password/reset-password";
import { Signup } from "../pages/signup/signup";

import { EventData } from "../providers/event-data";
import { AuthData } from "../providers/auth-data";
import { ProfileData } from "../providers/profile-data";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventDetail,
    EventCreate,
    EventList,
    Login,
    ResetPassword,
    Signup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventDetail,
    EventCreate,
    EventList,
    Login,
    ResetPassword,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EventData,
    AuthData,
    ProfileData
  ]
})
export class AppModule { }
