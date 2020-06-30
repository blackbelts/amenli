import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './shared/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amenli';
  constructor(private trnaslateService: TranslateConfigService) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    console.log('HERE2');
    if (!lang) {
      console.log('HERE');
      this.trnaslateService.setLanguage('ar');
      this.trnaslateService.setDefault('ar');
      this.trnaslateService.setDir('rtl');
      localStorage.setItem('lang', 'ar');
    } else {
      const langStorage = localStorage.getItem('lang');
      this.trnaslateService.setLanguage(langStorage);
      this.trnaslateService.setDefault(langStorage);

      if (langStorage === 'ar') {
        this.trnaslateService.setDir('rtl');
      } else if (langStorage === 'en') {
        this.trnaslateService.setDir('ltr');
 }

    }



  }
}
