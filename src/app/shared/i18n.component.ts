import { Component, OnInit } from '@angular/core';
import { I18nService } from './i18n.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-i18n',
  styles: [`.flag-icon {
    position: relative;
    display: inline-block;
    width: 1.33333333em;
    line-height: 1em;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    height: 12px;
}
`, `.selected-language {
  color: #fff !important;
  font-weight: bold;
}`,
`.not-selected-language {
  color: #555555;
  font-weight: bold;
}`,
`
.language-flag {
  opacity: 0.6;
}`, `
.selected-language-flag {
  opacity: 0.9;
}
`],
  template: `
   <a  *ngFor="let lang of i18nService.langList" href="javascript:void(0);" class="not-selected-language" [ngClass]="{'selected-language': i18nService.currentLanguage === lang.lang}"

            (click)="i18nService.languageChange(lang.lang)">
            <span class="mr-3">
              <span class="flag-icon flag-icon-us mr-1" [ngStyle]="{'background-image':'url('+lang.flag+')'}"
                [ngClass]="{'language-flag': i18nService.currentLanguage !== 'lang.lang', 'selected-language-flag': i18nService.currentLanguage === 'lang.lang'}">
                </span>
                {{lang.lang}}
            </span>
          </a>

  `
})
export class I18nComponent implements OnInit {
  constructor(public i18nService: I18nService, private sanitization: DomSanitizer) { }
  ngOnInit() {
  }

  sanitize(img) {
    return this.sanitization.bypassSecurityTrustStyle(`url('${img}');`);
  }

}
