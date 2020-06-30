import { CheckoutService } from './../../checkout/shared/checkout.service';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {Message} from 'primeng//api';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {
  plans;
  ages;
  loadPlansSub: Subscription;
  loadLifeAges: Subscription;
  form: FormGroup;
  done: boolean = false;
  notDone: boolean = false;
  load: boolean = false;
  phonePattern = "^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$";

  constructor(private quotesService: QuotesService, private checkoutService: CheckoutService) { }

  ngOnInit() {
    // create form
    this.createCarForm();

    this.ages = this.quotesService.getLifeAges();
    this.plans = this.quotesService.getPlans();
  }
  createCarForm() {
    this.form =  new FormGroup({
      plan: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      age: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(this.phonePattern)]
      })
    });
  }
  createTicket(form) {
    this.load = true;
    if ((!form.valid) || (form.value.phone === null) || (form.value.name === null)) {
      this.notDone = true;
      this.load = false;
    } else {
      console.log(typeof(form.value.phone));
      this.notDone = false;
      this.checkoutService.submitTicket({
        name: form.value.name,
        phone: form.value.phone,
        plan: form.value.plan,
        age: form.value.age.toString(),
        type: 'life',
        }).subscribe(res => {
          if (res) {
            this.done = true;
            this.load = false;
          }
        }, error => console.log(error));
    }
  }
  get Phone() {
    return this.form.get('phone');
}

}
