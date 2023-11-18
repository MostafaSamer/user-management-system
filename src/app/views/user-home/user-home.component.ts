import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  user!: User;
  viewAs: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.viewAs = true;
      this.userService.getUser(userId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error) => {
          console.error('An error occurred while fetching user data: ', error);
        }
      );
    } else {
      const user = this.authService.getLoggedInUser();
      if(user) this.user = user;
      else this.router.navigate(['/']);
    }
  }

  editUser() {
    this.viewAs ? this.router.navigate(['/edit-user', this.user?.id]) :
    this.router.navigate(['/edit-profile']);
  }
}
