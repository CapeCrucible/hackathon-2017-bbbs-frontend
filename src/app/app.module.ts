import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule, MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { StatePickerComponent } from './forms/state-picker/state-picker.component';
import { HttpWrapper } from './http-wrapper.service';
import { HelpComponent } from './help/help.component';
import { MatchComponent } from './match/match.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './match/user-list/user-list.component';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    StatePickerComponent,
    HelpComponent,
    MatchComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdGridListModule,
  ],
  providers: [
    HttpWrapper,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
