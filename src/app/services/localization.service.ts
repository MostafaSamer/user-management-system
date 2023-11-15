// localization.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  constructor(private translate: TranslateService) {}

  // Set up the translation service
  init() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    this.translate.use(newLang);
  }

  getCurrentLanguage() {
    return this.translate.currentLang
  }
}
