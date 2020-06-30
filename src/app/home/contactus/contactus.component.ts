import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('contactus').subscribe(val => {
      (document.getElementById('name') as HTMLInputElement).placeholder = val.name;
      (document.getElementById('email') as HTMLInputElement).placeholder = val.email;
      (document.getElementById('phone') as HTMLInputElement).placeholder = val.phone;
      (document.getElementById('message') as HTMLInputElement).placeholder = val.message;
    });
  }

}
