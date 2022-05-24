import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  {
    path:'register', component:SignupComponent
  },
  { path:'admin', component:AdminComponent},
  { path:'update', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
