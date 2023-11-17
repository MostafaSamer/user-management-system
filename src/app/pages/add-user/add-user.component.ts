import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  addUser(user: User) {
    this.userService.addUser(user)
    .subscribe(
      (user) => this.router.navigate(['/']),
      (error) => {
        console.error('An error occurred during adding user: ', error);
        // this.errorMessage = 'An unexpected error occurred.';
      }
    )
  }

  // TODO: Add validation error

}
