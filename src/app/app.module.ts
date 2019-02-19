import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'lazy-1', canActivate: [AuthGuard], loadChildren: './first-lazy-module/first-lazy.module#FirstLazyModule', pathMatch: 'full'},
  {path: 'lazy-2', canActivate: [AuthGuard], loadChildren: './second-lazy-module/second-lazy.module#SecondLazyModule', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
