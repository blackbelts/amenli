import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('nav_list.search').subscribe((text:string) => {
      (<HTMLInputElement>document.getElementById('search')).placeholder = text;
    })
  }

  get lang() {return localStorage.getItem('lang');}

}
