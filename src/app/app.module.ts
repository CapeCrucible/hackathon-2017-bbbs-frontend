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
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { StatePickerComponent } from './forms/state-picker/state-picker.component';
import { HttpWrapper } from './http-wrapper.service';
import { HelpComponent } from './help/help.component';
import { CreateMatchComponent } from './match/create-match/create-match.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './match/user-list/user-list.component';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './user/address/address.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { InterestListComponent } from './user/interest-list/interest-list.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchDetailsComponent } from './match/match-details/match-details.component';
import { InterestSelectorComponent } from './register/interest-selector/interest-selector.component';
import { UserDetailsMultipleComponent } from './user/user-details-multiple/user-details-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    StatePickerComponent,
    HelpComponent,
    CreateMatchComponent,
    UserListComponent,
    UserDetailsComponent,
    AddressComponent,
    ContactInfoComponent,
    InterestListComponent,
    MatchListComponent,
    MatchDetailsComponent,
    UserDetailsMultipleComponent,
    InterestSelectorComponent,
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
    MdProgressSpinnerModule,
  ],
  providers: [
    HttpWrapper,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
