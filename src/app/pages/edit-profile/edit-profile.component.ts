import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user!: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    this.user = this.authService.getLoggedInUser()
  }

  editUser(user: User) {
    if (this.user && this.user.id !== undefined) {
      this.userService.editUser(this.user.id.toString(), user)
        .subscribe(
          (user) => this.router.navigate(['/']),
          (error) => {
            console.error('An error occurred during adding user: ', error);
            // this.errorMessage = 'An unexpected error occurred.';
          }
        );
    } else {
      console.error('User or user ID is undefined.');
      // Handle the case where user or user ID is undefined
    }
  }
  
}
