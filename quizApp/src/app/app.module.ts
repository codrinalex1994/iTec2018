import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCLu7FU431qbmg9QGjeaWmv6v1CogVKN18",
  authDomain: "quizapp-14020.firebaseapp.com",
  databaseURL: "https://quizapp-14020.firebaseio.com",
  projectId: "quizapp-14020",
  storageBucket: "quizapp-14020.appspot.com",
  messagingSenderId: "559165803566"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
