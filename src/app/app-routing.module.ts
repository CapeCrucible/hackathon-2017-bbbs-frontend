import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { CreateMatchComponent } from './match/create-match/create-match.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchDetailsComponent } from './match/match-details/match-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'matches', component: MatchListComponent},
  {path: 'matches/create', component: CreateMatchComponent},
  {path: 'matches/:id', component: MatchDetailsComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'help', component: HelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
