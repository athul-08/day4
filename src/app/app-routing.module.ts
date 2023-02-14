import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'district',component:DistrictComponent
  },
  {
    path: 'contact',component:ContactComponent
  },
  {
    path: 'signup',component:SignupComponent
  },
  {
    path: 'signin',component:SigninComponent
  },
  {
    path: 'single',component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
