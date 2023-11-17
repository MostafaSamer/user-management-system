import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: string = "";
  user: User | undefined;

  constructor(
    private userServices: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || "";
    this.fetchUserData(this.userId);
  }

  fetchUserData(id: string) {
    this.userServices.getUser(id)
    .subscribe(
      (user) => this.user = user,
      (error) => {
        console.error('An error occurred during geeting user: ', error);
      }
    )
  }

  editUser(user: User) {
    this.userServices.editUser(this.userId, user)
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
