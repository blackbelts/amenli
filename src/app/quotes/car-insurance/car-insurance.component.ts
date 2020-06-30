import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {Message} from 'primeng//api';
@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent implements OnInit, OnDestroy {
  price;
  brands;
  years;
  loadBrandsSub: Subscription;
  form: FormGroup;
  data = {
    brand: null,
    price: null,
    year: null
  };
  pricePattern = "^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$";


  valueYear: number;
  constructor(private quotesService: QuotesService, private translate: TranslateService) { }

  ngOnInit() {
    const cacheData = JSON.parse(sessionStorage.getItem('form'));

    if (cacheData) {
      const key1 = 'price';
      const key2 = 'brand';
      const key3 = 'year';
      this.data.price = this.fixNumber(cacheData[key1].toString());
      this.data.brand = cacheData[key2];
      this.data.year = cacheData[key3];
      this.price = this.fixNumber(cacheData[key1].toString());
      if ((this.data.price != null) && (this.data.price) !== 0 && (this.data.brand != null) &&
        (this.data.brand !== 0 ) && (this.data.year != null) && (this.data.year !== 0 ) ) {
        this.quotesService.getDataList({id: this.data.brand, price: parseInt(this.data.price)});
        }
    }
    console.log('form', this.data);
    // create form
    this.createCarForm();

    this.years = this.quotesService.getYears();

    this.loadBrandsSub = this.quotesService.loadBrands.subscribe(brands => {
      this.brands = brands;
      console.log('brands', this.brands);
    });

    this.quotesService.fetchBrandsFromService();

    this.translate.get('quotes.car_placeholder').subscribe((text: string) => {
      (document.getElementById('price') as HTMLInputElement).placeholder = text;
    });


    // get input value
    this.valueYear = this.years[0].value;
    // console.log('year val', this.years[0].value);
  }

  convertArabNum(arabNumStr) {



      let x = '';
      const dic = {'٠': 0, '١': 1, '٢': 2, '٣': 3, '٤': 4, '٥': 5, '٦': 6,
      '٧': 7, '٨': 8, '٩': 9, '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 , '7': 7,
      '8': 8 , '9': 9};

      for (let i = 0; i < arabNumStr.length; i++) {
        x += dic[arabNumStr.charAt(i)];
      }
      return x;


  }

  formatNum(val) {
    const x = val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.price = x;
}

  fixNumber(val) {
    const y = val.replace(',', '');
    return y;
  }

  createCarForm() {
    this.form =  new FormGroup({
      brand: new FormControl(this.data.brand, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(5000, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(this.pricePattern)]
      }),
      year: new FormControl(this.data.year, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  get Price() {
    return this.form.get('price');
}

  // Form
  selectBrand(event) {
    console.log(event.value);
   // this.afterCheckForm();
  }



  // submit form auto
  submitFormAuto(value: any, type: 'brand' | 'price' | 'year') {
    this.data.year = this.valueYear;
    if (type === 'brand') {
      this.data.brand = value;
    }

    if (type === 'price') {
      const x = this.fixNumber(value);
      this.data.price = parseInt(this.convertArabNum(x.toString()));

    }

    // this.data.year = value;
    if (type === 'year') {
      this.data.year = value;
    }


    if ((this.data.price != null) && (this.data.price) !== 0 && (this.data.brand != null) &&
    (this.data.brand !== 0 ) && (this.data.year != null) && (this.data.year !== 0 ) ) {
      console.log(this.data);
      this.quotesService.getDataList({id: this.data.brand, price: this.data.price});
      const cacheData = {'brand': this.data.brand, 'price': this.data.price, 'year': this.data.year };
      sessionStorage.setItem('form', JSON.stringify(cacheData));
    }

  }

  selectYear(event) {
    console.log(event.value);

  }

  getPrice(val) {

    const result = parseInt(val);
    console.log('price', result);
    // this.afterCheckForm();
  }

  afterCheckForm(data) {
    if (!this.form.valid) {
      console.log('FORM FALSE');
      return;
    }

    // console.log(this.data);
  }

  // End Form

  onSubmit() {
    console.log(this.form);
    if (!this.form.valid) {
      console.log('FALSE');
    }

    console.log(this.form.value);
  }

  ngOnDestroy() {
    if (this.loadBrandsSub) { this.loadBrandsSub.unsubscribe(); }
  }
}
