import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OdooService } from 'src/app/shared/odoo.service';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class QuotesService {
  private jsonURL = 'assets/jsonFiles/Sheet1.json';
  private brands: any[];
  _dataList;
  carForm: FormGroup;
  loadBrands = new Subject<any[]>();
  loadLowestPrice = new Subject<any>();
  loadNumCompanies = new Subject<number>();
  loadNumCompaniesByPrice = new Subject<number>();
  loadAllCompanies = new Subject<any>();
  loadAllCompaniesByFilter = new Subject<any>();
  loadAllCompaniesByPrice = new Subject<any>();
  private years = [
    { label: '2020', value: 2020 },
    { label: '2019', value: 2019 },
    { label: '2018', value: 2018 },
    { label: '2017', value: 2017 },
  ];
  private plans = [
    { value: null, label: 'اختر الخطة' },
    { value: 'معاش', label: 'لمعاشى' },
    { value: 'زواج', label: 'لزواجى' },
    { value: 'تعليم', label: 'لتعليم اولادى' },
    { value: 'زواج ابناء', label: 'لزواج اولادى' },
    { value: 'استثمار', label: 'لاستثمار أموالي' },
    { value: 'وفاة أو عجز', label: 'في حالة الوفاة - العجز' },
  ];
  private lifeAges = [
    { label: 'من -إلي', value: null },
    { label: '22 - 29', value: '22 - 29' },
    { label: '30 - 34', value: '30 - 34' },
    { label: '35 - 39', value: '35 - 39' },
    { label: '40 - 44', value: '40 - 44' },
    { label: '45 - 49', value: '45 - 49' },
    { label: '50 - 54', value: '50 - 54' },
    { label: '55 - 60', value: '55 - 60' },
  ];

  private ages = [
    { label: 'من - إلي', value: null },
    { label: '0 - 17', value: 10 },
    { label: '18 - 24', value: 20 },
    { label: '25 - 29', value: 27 },
    { label: '30 - 34', value: 32 },
    { label: '35 - 39', value: 37 },
    { label: '40 - 44', value: 42 },
    { label: '45 - 49', value: 47 },
    { label: '50 - 54', value: 52 },
    { label: '55 - 59', value: 57 },
    { label: '60 - 64', value: 62 },
  ];

  private gender = [
      { label: 'الجنس', value: null },
      { label: 'ذكر', value: 'M' },
      { label: 'أنثي', value: 'F' },
  ];
  private diseises = [
    { label: 'نعم', value: 'yes' },
    { label: 'لا', value: 'no' },
];

  private works = [
    { label: 'Management Operations', value: 'Mangement' },
  ];


  constructor(private translate: TranslateService, private http: HttpClient, private odooService: OdooService, private shared: SharedService) {
    console.log('quotes service');
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    //  });
    this.translate.get('quotes.labelTitle').subscribe(labelTitle => {
      this.brands = [
        // {
        //   label: labelTitle,
        //   value: 0
        // }
      ];
    });
  }

  fetchBrandsFromService() {
    const data = {paramlist: {filter: [], need: []}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'car.brands',
    'search_read', data).subscribe(res => {
        res.forEach(record => {
          const obj = {};
          const key1 = 'value';
          const key2 = 'label';
          obj[key1] = record.id;
          obj[key2] = record.brand;
          this.brands.push(obj);
          this.brands.sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));



        });
        this.brands.unshift({'label': 'اختار نوع العربية', 'value': null});
        this.loadBrands.next([...this.brands]);
        //  return [...this.brands];
    }, error => console.log(error));
    // return [...this.brands];
  }

  get DataList() {
    return this._dataList;
  }

  getAllCompaniesData(dataList) {
    this._dataList = dataList;

    this.getAllCompanies();
  }

  getDataList(dataList) {
    console.log('data list', dataList);
    this._dataList = dataList;

    this.fetchLowestPrice();
    this.getAllCompanies();
  }

  getAllCompanies() {
    if (localStorage.getItem('medical') === 'medical') {
      const data = {paramlist: {data: this._dataList}};
      this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
      'sort_medical', data).subscribe(res => {
        if (this._dataList) {
          console.log(res);
          this.loadAllCompanies.next(res);
          this.loadNumCompanies.next(Object.keys(res).length);
        }
      }, error => console.log(error));
    } else {
      const data = {paramlist: {data: this._dataList}};
      this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
      'get_price', data).subscribe(res => {
        // console.log('res all', res);
        // console.log ('result  image 2 => ', Object.values(Object.values(Object.values(res)[0]))[0]);

        // for(let i in res) {
        //   console.log ('result => ', Object.values(res)[i].plan);
        //   for(let j in Object.values(res)[i].plan) {
        //     console.log ('result  name 2 => ', Object.keys(Object.values(Object.values(res)[i].plan)[j])[0]);
        //     console.log ('result  month_price 2 => ', Object.values(Object.values(Object.values(res)[i].plan)[j])[0]["month_price"]);
        //     console.log ('result  icons 2 => ', Object.values(Object.values(Object.values(res)[i].plan)[j])[0]["icon"]);
        //   }
        // }
        if (this._dataList) {
          // console.log('data compare company', JSON.stringify(res));
        // console.log('data json', res);
        //   console.log('length', Object.values(Object.values(res)[1])[1]);
        this.loadAllCompanies.next(res);
        this.loadNumCompanies.next(Object.keys(res).length);
        }
      }, error => console.log(error));
    }
  }

  fetchLowestPrice() {
    if (localStorage.getItem('medical') === 'medical') {
      const data = {paramlist: {data: this._dataList}};
      console.log('data list', this._dataList);
      this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
      'get_medical_lowest_price', data).subscribe(res => {
        if (this._dataList) {
        console.log('lowest price', res);
        console.log(this._dataList);
        this.loadLowestPrice.next(res);

        }
      }, error => console.log(error));
    } else {
      const data = {paramlist: {data: this._dataList}};
      console.log('data list', this._dataList);
      this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
      'get_lowest_price', data).subscribe(res => {
        if (this._dataList) {
        console.log('lowest price', res);
        console.log(this._dataList);
        this.loadLowestPrice.next(res);

        }
      }, error => console.log(error));
    }
  }
  sortMedicalCompaniesByPrice(sort: string) {
    const dataList = {dob: parseInt(localStorage.getItem('dob')), sort};
    console.log('data list', dataList);
    const data = {paramlist: {data: dataList}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'sort_medical', data).subscribe(res => {
      if (res) {
        console.log(res);
        this.loadAllCompaniesByPrice.next(res);
        this.loadNumCompaniesByPrice.next(Object.keys(res).length);

      }
    }, error => console.log(error));
  }
  sortCompaniesByPrice(brandId: number, price: number, sort: string) {
      const dataList = {id: brandId, price, sort};
      console.log('data list', dataList);
      const data = {paramlist: {data: dataList}};
      this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
      'sort', data).subscribe(res => {
        if (res) {
          console.log(res);
          this.loadAllCompaniesByPrice.next(res);
          this.loadNumCompaniesByPrice.next(Object.keys(res).length);

        }
      }, error => console.log(error));
  }
  getByPlan(brandId: number, price: number, value_filter: string) {
    const dataList = { id: brandId, price, filter: value_filter };

    const data = {paramlist: {data: dataList}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'filter', data).subscribe(res => {
      if (res) {

         this.loadAllCompaniesByFilter.next(res);
      }
    }, error => console.log(error));
  }






  getBrands() {
    return [...this.brands];
  }

  getYears() {
    return [...this.years];
  }

  getAges() {
    return [...this.ages];
  }
  getPlans() {
    return [...this.plans];
  }
  getLifeAges() {
    return [...this.lifeAges];
  }

  getGender() {
    return [...this.gender];
  }
  getDiseises() {
    return [...this.diseises];
  }
  getWorks() {
    return [...this.works];
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
