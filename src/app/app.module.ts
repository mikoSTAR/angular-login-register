import { routing } from './app.routing';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
