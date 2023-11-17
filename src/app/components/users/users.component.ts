import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModalComponent } from '../modal/delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userServices: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userServices.getUsers().subscribe((users) => this.users = users)
  }

  editUser(user: User) {
    console.log("Navigate to edit user page with this user id: ", user.id)
  }
  deleteUser(user: User) {
    this.userServices
    .deleteUser(user)
    .subscribe(() => (this.users = this.users.filter(u => u.id !== user.id)))
  }

  confirmDeleteUser(user: User): void {
    const dialogRef = this.dialog.open(DeleteUserModalComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(user);
      }
    });
  }

}
