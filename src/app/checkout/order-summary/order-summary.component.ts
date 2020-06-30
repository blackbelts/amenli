import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { CheckoutService } from '../shared/checkout.service';
import { UIService } from 'src/app/shared/ui.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input('plan') plan: string;
  form;
  summary: any;
  planSelected: string;
  companyName: string;
  brandId: string;
  price: string;
  planData: Subscription;
  chk_val: boolean;
  imagePath: string;
  load: boolean = false;
  constructor(private checkoutService: CheckoutService, private uiService: UIService, private params: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.params.paramMap.subscribe(paramMap => {
      if ((!paramMap.has('plan_selected'))
      && (!paramMap.has('company_name'))
      && (!paramMap.has('brandId'))
      && (!paramMap.has('price'))) {
        this.router.navigateByUrl('');
      }

      this.planSelected = paramMap.get('plan_selected');
      // localStorage.setItem()
      this.companyName = paramMap.get('company_name');
      this.brandId = paramMap.get('brandId');
      this.price = paramMap.get('price');
      this.imagePath = paramMap.get('imagePath');

      this.planData = this.checkoutService.loadPlan.subscribe(res => {
        const key = 'benefit';
        console.log('plans', Object.values(res)[0][key]);
        this.planData = res;
        console.log(this.planData);
        const keys = 'month_price';
        localStorage.setItem('price', JSON.stringify(this.convertObjectToValues(this.planData)[0][keys]));

      });

      console.log('Here =>', this.planData);
      this.checkoutService.getPlanCompany( this.brandId, this.price, this.companyName, this.planSelected);
    });


    this.form = this.checkoutService.form;

  }

  getCheck(event) {
    this.chk_val = event;
  }

  onClick() {
    this.load = true;
    console.log(this.checkoutService.form.value);
    if (this.checkoutService.form.value.cardNumber !== null ) {
      if (localStorage.getItem('medical') === 'medical') {
        this.checkoutService.submitTicket({
          phone: this.checkoutService.form.value.phone_number,
          mail: this.checkoutService.form.value.email,
          name: this.checkoutService.form.value.name,
          type: localStorage.getItem('medical'),
          sum_insured: parseInt(localStorage.getItem('price'))
          }).subscribe(res => {
            console.log(res);
            if (res) {
                console.log('get ticket', res);
                localStorage.setItem('name', this.checkoutService.form.value.name);
                localStorage.setItem('address', this.checkoutService.form.value.re_address);
                localStorage.setItem('planSelected', this.planSelected);
                this.load = false;
                this.router.navigate(['/thanks']);
            }
          }, error => console.log(error));
      } else {
        this.checkoutService.submitTicket({
          phone: this.checkoutService.form.value.phone_number,
          mail: this.checkoutService.form.value.email,
          name: this.checkoutService.form.value.name,
          car: parseInt(localStorage.getItem('brandId')),
          sum_insured: parseInt(localStorage.getItem('price'))
          }).subscribe(res => {
            console.log(res);
            if (res) {
                console.log('get ticket', res);
                localStorage.setItem('name', this.checkoutService.form.value.name);
                localStorage.setItem('address', this.checkoutService.form.value.re_address);
                localStorage.setItem('planSelected', this.planSelected);
                this.load = false;
                this.router.navigate(['/thanks']);
            }
          }, error => console.log(error));
        }
      } else {
        if (localStorage.getItem('medical') === 'medical') {
          this.checkoutService.submitTicket({
            phone: this.checkoutService.cashForm.value.phone_number,
            mail: this.checkoutService.cashForm.value.email,
            name: this.checkoutService.cashForm.value.name,
            type: localStorage.getItem('medical'),
            sum_insured: parseInt(localStorage.getItem('price'))
            }).subscribe(res => {
              console.log(res);
              if (res) {
                  console.log('get ticket', res);
                  localStorage.setItem('name', this.checkoutService.cashForm.value.name);
                  localStorage.setItem('address', this.checkoutService.cashForm.value.re_address);
                  localStorage.setItem('planSelected', this.planSelected);
                  this.load = false;
                  this.router.navigate(['/thanks']);
              }
            }, error => console.log(error));
        } else {
          this.checkoutService.submitTicket({
            phone: this.checkoutService.cashForm.value.phone_number,
            mail: this.checkoutService.cashForm.value.email,
            name: this.checkoutService.cashForm.value.name,
            car: parseInt(localStorage.getItem('brandId')),
            sum_insured: parseInt(localStorage.getItem('price'))
            }).subscribe(res => {
              console.log(res);
              if (res) {
                  console.log('get ticket', res);
                  localStorage.setItem('name', this.checkoutService.cashForm.value.name);
                  localStorage.setItem('address', this.checkoutService.cashForm.value.re_address);
                  localStorage.setItem('planSelected', this.planSelected);
                  this.load = false;
                  this.router.navigate(['/thanks']);
              }
            }, error => console.log(error));
          }
      }
  }

  convertObjectToKeys(obj: object) {
    if (obj) {
      return Object.keys(obj);
    }
  }
  convertObjectToValues(obj: object) {
    if (obj) {
      return Object.values(obj);
    }
  }

  // ngOnDestroy() {
  //   if(this.planData) this.planData.unsubscribe();
  // }
}
