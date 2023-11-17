import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private user!: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // const checkUser = this.authService.getLoggedInUser();
    // if(checkUser) this.user = checkUser;
    // else this.router.navigate(['/login']);

  }

  // getLoggedInUserRole() {
  //   return this.user.role
  // }

}
