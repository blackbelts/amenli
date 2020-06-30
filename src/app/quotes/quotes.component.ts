import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuotesService } from './shared/quotes.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  brands;
  years;
  enabled = true;
  constructor(private quotesService: QuotesService, private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  get lang() {return localStorage.getItem('lang');}

  handleChange(e) {
    const index = e.index;
    this.enabled = false;
    if (index === 1) {
      this.enabled = false;
      localStorage.setItem('medical', 'medical');
      this.changeDetector.detectChanges();
      this.enabled = true;
    } else if ( index === 0) {
      this.enabled = false;
      localStorage.removeItem('medical');
      this.changeDetector.detectChanges();
      this.enabled = true;
    } else {
      this.enabled = false;
      localStorage.removeItem('medical');
      this.changeDetector.detectChanges();
      this.enabled = true;
    }
}

}
