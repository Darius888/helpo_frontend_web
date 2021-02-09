import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog'; 

import { MatCarouselModule } from '@ngmodule/material-carousel';

import { CookieService } from 'ngx-cookie-service';

import { NgxWebstorageModule } from 'ngx-webstorage';

import{ ChangeDetectorRef } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { HelpoJobDialogComponent } from './helpo-job-dialog/helpo-job-dialog.component';
import { AddHelpoJobDialogComponent } from './add-helpo-job-dialog/add-helpo-job-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProfileComponent,
    MainComponent,
    SearchComponent,
    PageNotFoundComponent,
    LogoutComponent,
    HelpoJobDialogComponent,
    AddHelpoJobDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    ScrollingModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule,
    MatCarouselModule.forRoot()
    ],
  providers: [CookieService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
