import { CheckoutService } from './../checkout/shared/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  price;
  name;
  planeSelected;
  address;
  value: number = 50;
  constructor(private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.name = localStorage.getItem('name');
    this.price = localStorage.getItem('price');
    this.planeSelected = localStorage.getItem('planSelected');
    this.address = localStorage.getItem('address');

  }

}
