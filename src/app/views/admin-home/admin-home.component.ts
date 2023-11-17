import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {

  constructor(
    private router: Router
  ) {}

  goToAddUser() {
    this.router.navigate(["/add-user"])    
  }

}
