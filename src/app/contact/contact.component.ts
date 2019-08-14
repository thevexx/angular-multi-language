import { Component, OnInit } from '@angular/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public i18nService: I18nService) { }

  ngOnInit() {
  }

}
