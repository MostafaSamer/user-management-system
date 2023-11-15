// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    // private localizationService: LocalizationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout(); // Add a logout method in your AuthService
    this.router.navigate(['/login']);
  }

  switchLanguage() {
    // this.localizationService.switchLanguage(); // Implement a method in your localization service to switch the language
  }
}
