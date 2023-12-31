import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModalComponent } from '../modal/delete-user-modal/delete-user-modal.component';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loadingService.hideLoading();
    })
  }

  viewAs(user: User) {
    this.router.navigate(['/view-as', user.id])
  }

  editUser(user: User) {
    this.router.navigate(['/edit-user', user.id])
  }

  deleteUser(user: User) {
    this.userService
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
