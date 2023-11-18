import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ViewAsUserComponent } from './pages/view-as-user/view-as-user.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard], data: { roles: [0] } },
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard], data: { roles: [0] } },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard], data: { roles: [1] } },
  { path: 'view-as/:id', component: ViewAsUserComponent, canActivate: [AuthGuard], data: { roles: [0] } },
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { roles: [0, 1] } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
