import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from './i18n.pipe';
import { I18nComponent } from './i18n.component';
import { I18nService } from './i18n.service';
import { i18nConfigService } from './i18n-config.service';



@NgModule({
  declarations: [
    // I18nPipe,
    // I18nComponent
  ],
  imports: [
    CommonModule
  ]
})
export class I18nModule {

  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: I18nModule,
      providers: [
        I18nService,
        {
          provide: i18nConfigService,
          useValue: config
        }
      ]
    }
  }
}
