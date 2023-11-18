import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { DeleteUserModalComponent } from './components/modal/delete-user-modal/delete-user-modal.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ViewAsUserComponent } from './pages/view-as-user/view-as-user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddUserComponent,
    HeaderComponent,
    UsersComponent,
    AddUserFormComponent,
    UserHomeComponent,
    AdminHomeComponent,
    CtaButtonComponent,
    DeleteUserModalComponent,
    EditUserFormComponent,
    EditUserComponent,
    EditProfileComponent,
    ViewAsUserComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
