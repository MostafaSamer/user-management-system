import { Component, OnInit } from '@angular/core';
import { LocalizationService } from './services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-management-system';

  constructor(private localizationService: LocalizationService) {}

  ngOnInit() {
    // Initialize the localization service
    this.localizationService.init();
  }

  getCurrentLanguage() {
    return this.localizationService.getCurrentLanguage()
  }

}
