import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/shared/translate-config.service';
import { Insurance } from 'src/app/insurance-services/insurance.model';
import { InsuranceService } from 'src/app/insurance-services/insurance.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit, AfterViewInit {
  direction: 'ltr' | 'rtl';
  services: Insurance[];
  constructor(private translate: TranslateConfigService, private insuranceService: InsuranceService, private router: Router) { }

  ngOnInit() {
    this.direction = this.translate.getDir();
    this.services = this.insuranceService.service;
  }



  get lang() { return localStorage.getItem('lang'); }

  changeLang(lang) {
    this.translate.setLanguage(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
    if (lang === 'ar') {

      this.translate.setDir('rtl');
    } else {
      this.translate.setDir('ltr');
    }


  }

  ngAfterViewInit() {
    console.log('time');
  //  console.log('url', location.pathname);
    if (location.pathname === '/get_quote') {
      const ele = document.getElementById('claims');
      ele.classList.add("active-link");
    }
  }



  onNavigate() {
    this.router.navigate(['/get_quote'])
    .then(() => {
      window.location.reload();

    });


  }

  goTo(location) {
    window.location.hash = '';
    window.location.hash = location;
  }

  scroll(el: HTMLLIElement) {
    el.scrollIntoView();
  }


}
