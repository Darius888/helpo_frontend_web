import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { AppAuthGuardService } from './app-auth-guard.service';
import { AddHelpoJobDialogComponent } from './add-helpo-job-dialog/add-helpo-job-dialog.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'feed', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent, canActivate:[AppAuthGuardService]},
  { path: 'logout', component: LogoutComponent },
  { path: 'add', component: AddHelpoJobDialogComponent ,canActivate:[AppAuthGuardService]},
  // { path: '404', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '404' },
  { path: '',   redirectTo: 'feed', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
