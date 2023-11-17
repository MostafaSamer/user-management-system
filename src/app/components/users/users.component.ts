import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    this.userServices.getUsers().subscribe((users) => this.users = users)
  }

  editUser(user: User) {
    console.log("Navigate to edit user page with this user id: ", user.id)
  }
  deleteUser(user: User) {
    console.log("Navigate to delete user page with this user id: ", user.id)
  }

}
