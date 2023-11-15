import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(
    private userServices: UserService
  ) {}

  addUser(user: User) {
    this.userServices.addUser(user)
    .subscribe((user) => console.log(user))
  }

  // TODO: Add validation error
  // TODO: Navigate

}
