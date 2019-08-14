import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { I18nModule } from './shared/i18n.module';
import { I18nComponent } from './shared/i18n.component';
import { HttpClientModule } from '@angular/common/http';
import { I18nPipe } from './shared/i18n.pipe';
import * as enI18n from './shared/en.i18n';
import * as frI18n from './shared/fr.i18n';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
]

const languages = [
  { lang: 'EN', flag: 'assets/img/en.i18n.png', file: enI18n },
  { lang: 'FR', flag: 'assets/img/fr.i18n.png', file: frI18n }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    I18nComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // I18nModule,
    I18nModule.forRoot(languages),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
