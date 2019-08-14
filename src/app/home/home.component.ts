import { Component, OnInit } from '@angular/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private i18nService: I18nService) { }

  ngOnInit() {
  }

}
