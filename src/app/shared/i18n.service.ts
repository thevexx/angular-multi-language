import { Injectable, Inject } from '@angular/core';
// import frI18n from '../../assets/i18n/fr.i18n';
// import enI18n from '../../assets/i18n/en.i18n';
import { i18nConfigService } from './i18n-config.service';
import { HttpClient } from '@angular/common/http';
@Injectable(
  // {providedIn: 'root'}
)
export class I18nService {

  currentLanguage = '';

  constructor(@Inject(i18nConfigService) public langList) {
    this.initLang();
  }

  initLang() {
    if (localStorage.getItem('lang')) {
      console.log('getting old lang')
      this.currentLanguage = localStorage.getItem('lang');
    } else {
      localStorage.setItem('lang', 'EN');
      this.currentLanguage = 'EN';
    }
  }

  getString(key) {
    return this.langList[this.langList.map((e, i) => e.lang === this.currentLanguage ? i : null).filter(e => e !== null)[0]].file.default[key];
  }

  languageChange(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('lang', lang);
  }
}
