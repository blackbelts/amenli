import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../shared/checkout.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  form: FormGroup;
  cashForm: FormGroup;
  selectValue: string;
  part1: boolean = false;
  part2: boolean = false;
  constructor(private checkoutService: CheckoutService, private translate: TranslateService) { }


  ngOnInit() {
    this.form = this.checkoutService.form;
    this.cashForm = this.checkoutService.cashForm;
    // if(this.part1) {
    //     this.translate.get('checkout.card_number').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('card_number')).placeholder = text;
    //     });
    //     this.translate.get('checkout.name_card').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('name_card')).placeholder = text;
    //     });
    //     this.translate.get('checkout.email').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('email')).placeholder = text;
    //     });
    //     // this.translate.get('checkout.number').subscribe(text => {

    //     //   (<HTMLInputElement>document.getElementById('number')).placeholder = text;
    //     // });
    //     this.translate.get('checkout.exp').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('exp')).placeholder = text;
    //     });
    //     this.translate.get('checkout.security_code').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('security_code')).placeholder = text;
    //     });
    //     this.translate.get('checkout.phone_number').subscribe(text => {

    //       (<HTMLInputElement>document.getElementById('phone_number')).placeholder = text;
    //     });
    //   }
  }
  makeP1True() {
    this.part1 = true;
    this.part2 = false;

      // this.translate.get('checkout.card_number').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('card_number')).placeholder = text;
      // });
      // this.translate.get('checkout.name_card').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('name_card')).placeholder = text;
      // });
      // this.translate.get('checkout.email').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('email')).placeholder = text;
      // });
      // // this.translate.get('checkout.number').subscribe(text => {

      // //   (<HTMLInputElement>document.getElementById('number')).placeholder = text;
      // // });
      // this.translate.get('checkout.exp').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('exp')).placeholder = text;
      // });
      // this.translate.get('checkout.security_code').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('security_code')).placeholder = text;
      // });
      // this.translate.get('checkout.phone_number').subscribe(text => {

      //   (<HTMLInputElement>document.getElementById('phone_number')).placeholder = text;
      // });

  }

  makeP2True() {
    this.part2 = true;
    this.part1 = false;
  }
  get lang() {return localStorage.getItem('lang'); }
  onClicked(val) {
    console.log(val);
  }

  onClick() {
    // this.selectValue.valueChanges.subscribe
    console.log(this.selectValue);
  }

}
