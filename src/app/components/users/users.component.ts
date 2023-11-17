import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModalComponent } from '../modal/delete-user-modal/delete-user-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userServices: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userServices.getUsers().subscribe((users) => this.users = users)
  }

  editUser(user: User) {
    this.router.navigate(['/edit-user', user.id])
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