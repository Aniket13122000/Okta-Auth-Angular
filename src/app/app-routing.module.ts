import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CodeHandleComponent } from './code-handle/code-handle.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [  { path: '', redirectTo: '/home', pathMatch: 'full' },
{path :'home',component:HomeComponent},
{ path: 'login', component: LoginComponent },
{path:'handle-code',component:CodeHandleComponent},
{ path: 'profile', component: ProfileComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
