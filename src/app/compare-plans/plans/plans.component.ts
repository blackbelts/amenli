import { OdooService } from './../../shared/odoo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompareModelService } from '../shared/compare-model.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit, OnDestroy {
  options: object[];
  jsonData: object;
  companyName: string;
  planSelected: string;
  brandId: string;
  price: string;
  typeShow: string;
  change = false;
  loadPlansSub: Subscription;
  plans;
  month: string;
  year: string;
  medical: string;
  imagePath: string;
  covers;
  constructor(private translate: TranslateService , private router: Router, private params: ActivatedRoute, private compareModelService: CompareModelService, private odoo: OdooService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    const data = { paramlist: {}};
    this.odoo.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'get_covers', data).subscribe(res => {
      console.log(res);
      this.covers = res;
    });

    this.medical = localStorage.getItem('medical');
    this.translate.get('compare').subscribe(option => {
      this.options = [
        {name: option.monthly, value: 'monthly'},
        {name: option.yearly, value: 'yearly'},
      ];
    });

    this.params.paramMap.subscribe(paramMap => {
      this.planSelected = paramMap.get('plan_selected');
      this.companyName = paramMap.get('company_name');
      this.brandId = paramMap.get('brandId');
      this.price = paramMap.get('price');

      this.loadPlansSub = this.compareModelService.loadPlans.subscribe(res => {
        const key = 'price';
        // console.log('plans', Object.values(res)[0][key]);
        this.plans = res;
        // this.imagePath = res.image;
        this.imagePath = 'assets/images/logo-amenli.png';
        console.log(this.plans);
      });

      console.log('Here', this.plans);
      this.compareModelService.getPlans(this.companyName, this.brandId, this.price);
    });

    this.translate.get('compare.month').subscribe((text: string) => {
      this.month = text;
    });

    this.translate.get('compare.year').subscribe((text: string) => {
      this.year = text;
    });
  }



  getPriceFromObject(type: any, numTarget) {
    console.log(type, numTarget);
    let typeStr = '';
    if (type === 'monthly') {
      const key = 'month_price';
      typeStr = Object.values(this.plans.plan[numTarget])[0][key];
    } else if (type === 'yearly') {
      const key = 'price';
      typeStr = Object.values(this.plans.plan[numTarget])[0][key];
    }
    console.log(typeStr);


    return typeStr;
  }

  getChangeValue(val, target) {
    const ele = document.querySelector('.ele-' + target + '');
    const ele2 = document.querySelector('.type-' + target + '');
    const text_val = this.getType(val);
    const text = this.getPriceFromObject(val, target);


    ele.textContent = this.formatNumber(parseInt(text));
    ele2.textContent = text_val;
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  getType(type) {
    let type_val = '';
    if (type === 'monthly') {
      type_val = this.month;
    } else if (type === 'yearly') {
      type_val = this.year;
    }

    return type_val;
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

  onClick(company_name, plan_selected, brandId, price) {
    if (localStorage.getItem('medical') === 'medical') {
      this.router.navigate(['/', 'checkout', 'payment', company_name, plan_selected, parseInt(localStorage.getItem('dob')), this.imagePath])
      .then(() => {
        window.scrollTo(0, 0);
      });
    } else {
      this.router.navigate(['/', 'checkout', 'payment', company_name, plan_selected, brandId, price, this.imagePath])
      .then(() => {
        window.scrollTo(0, 0);
      });
    }
  }


  chk_val_is_ture_or_yes(val: string | boolean) {
    if ((val === true) || (val === 'Yes')) {
      return true;
    }
  }

  chk_val_is_false_or_no(val: string | boolean) {
    if ((val === false) || (val === 'No')) {
      return true;
    }
  }

  chk_if_not_true_and_false(val: string | boolean) {
    if ((val !== true) && (val !== 'No') && (val !== 'Yes') && (val !== false)) {
      return true;
    }
  }

  convertArray(num) {
    return new Array(num);
  }

  ngOnDestroy() {
    if (this.loadPlansSub) { this.loadPlansSub.unsubscribe(); }
  }

}
