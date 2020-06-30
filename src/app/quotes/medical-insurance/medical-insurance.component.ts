import { CheckoutService } from './../../checkout/shared/checkout.service';
import { TranslateConfigService } from './../../shared/translate-config.service';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {RadioButton} from 'primeng/radiobutton';

@Component({
  selector: 'app-medical-insurance',
  templateUrl: './medical-insurance.component.html',
  styleUrls: ['./medical-insurance.component.css']
})
export class MedicalInsuranceComponent implements OnInit {
  ages;
  gender;
  works;
  form: FormGroup;
  salutation: string;
  data = {
    age: 0,
    gender: 0,
    val1: 'no'
  };
  val1;

  radios = [
    {
      value: 'yes',
      label: 'نعم',
    },
    {
      value: 'no',
      label: 'لا',
    },
  ];
  ticket: boolean = false;
  notDone: boolean = false;
  load: boolean = false;
  phonePattern = "^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$";
  constructor(private quoteService: QuotesService, private translate: TranslateConfigService, private checkoutService: CheckoutService) {
   }

  ngOnInit() {
    this.createMedicalForm();
    this.ages = this.quoteService.getAges();
    this.gender = this.quoteService.getGender();
    this.works = this.quoteService.getWorks();
    localStorage.removeItem('medical');
  }
  createMedicalForm() {
    this.form =  new FormGroup({
      age: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
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
  onClick(event) {
    console.log(event);
    this.val1 = event;
  }
  submitFormAuto(value: any, type: 'age') {
    if (type === 'age') {
      this.data.age = value;
    }

    if ((this.data.age != null) && (this.data.gender != null) && (this.val1 === 'no') ) {
      this.ticket = false;
      localStorage.setItem('medical', 'medical');
      console.log(this.data);
      this.quoteService.getDataList({dob: this.data.age});
    }
  }
  createTicket(form) {
    this.load = true;
    if (this.val1 === 'yes') {
      if ((!form.valid) || (form.value.phone === null) || (form.value.name === null)) {
        console.log(this.form);
        this.notDone = true;
        this.load = false;
      } else {
        console.log(typeof(form.value.phone));
        this.notDone = false;
        this.checkoutService.submitTicket({
          name: form.value.name,
          phone: form.value.phone,
          age: form.value.age,
          type: 'medical chronic diseases',
          }).subscribe(res => {
            if (res) {
              this.ticket = true;
              this.load = false;
            }
          }, error => console.log(error));
      }
    }
  }
  get Phone() {
    return this.form.get('phone');
}
}
