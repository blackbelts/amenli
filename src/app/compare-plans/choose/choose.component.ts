import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { QuotesService } from 'src/app/quotes/shared/quotes.service';
import { Buffer } from 'buffer';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit, OnDestroy {
  options: any;
  overlays: any[];
  items: any[];
  loadItemsSubs: Subscription;
  loadItemsByPriceSubs: Subscription;
  loadItemsByFilterSubs: Subscription;
  brandId: number;
  price: number;
  global = window;
  plans;
  breakpoint;
  valChk = true;
  medical;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quoteService: QuotesService,
    private shared: SharedService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    if (localStorage.getItem('medical') === 'medical') {
      this.medical = localStorage.getItem('medical');
      this.breakpoint = window.innerWidth >= 900 ? 'p-col' : 'p-col-6';
      this.plans = [
        { label: 'ALL', value: 'all' },
        { label: 'GOLD', value: 'gold' },
        { label: 'PLATINUM', value: 'platinum' },
        { label: 'DIAMOND', value: 'diamond' }
      ];
      this.options = {
        center: { lat: 36.890257, lng: 30.707417 },
        zoom: 12
      };

      this.loadItemsSubs = this.quoteService.loadAllCompanies.subscribe(res => {
        this.items = res;
        console.log('item ==> ', this.items);
      });
      this.quoteService.getAllCompaniesData({
        dob: parseInt(localStorage.getItem('dob')),
        sort: 'zero'
      });
    } else {
    this.breakpoint = window.innerWidth >= 900 ? 'p-col' : 'p-col-6';
    this.plans = [
      { label: 'ALL', value: 'all' },
      { label: 'GOLD', value: 'gold' },
      { label: 'PLATINUM', value: 'platinum' },
      { label: 'DIAMOND', value: 'diamond' }
    ];
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('brandId') && !paramMap.has('price')) {
        this.router.navigateByUrl('/');
      }

      this.brandId = parseInt(paramMap.get('brandId'));
      this.price = parseInt(paramMap.get('price'));
    });

    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    this.loadItemsByFilterSubs = this.quoteService.loadAllCompaniesByFilter.subscribe(
      res => {
        this.items = res;
      }
    );
    this.quoteService.getByPlan(this.brandId, this.price, 'gold');
  }
  }

  onClick(company_name, plan, brandId, price) {
    if (localStorage.getItem('medical') === 'medical') {

      this.router.navigate(['/', 'plan', 'choose', company_name, plan, parseInt(localStorage.getItem('dob'))]).then(res =>  scrollTo(0, 0));

    } else {
      // console.log(company_name, plan, brandId, price);

      this.router.navigate(['/', 'plan', 'choose', company_name, plan, brandId, price]).then(res =>  scrollTo(0, 0));
    }
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth >= 900 ? 'p-col' : 'p-col-6';
  }

  counter(i: number) {
    return new Array(i);
  }

  getRateString(rate: number) {
    let res: string;
    if (rate >= 4) {
      res = 'Excellent!';
    } else if (rate >= 3) {
      res = 'Very Good!';
    } else if (rate < 3) {
      res = 'Good!';
    }

    return res;
  }


  display_image(enCode: string) {
    return btoa(enCode);
  }

  getColor(type) {
    let color_str = '';
    if (type === 'cubes') {
      color_str = '#e5e4e2';
    } else if (type === 'coins') {
      color_str = 'gold';
    } else if (type === 'gem') {
      color_str = '#B9F2FF';
    }

    return color_str;
  }

  getImage(imgUrl) {
    return 'url(' + imgUrl + ')';
  }

  sort(val) {
    this.valChk = !val;

    let sort = 'zero';
    if (val === true) {
      sort = 'zero';
    } else {
      sort = 'not-zero';
    }
    this.loadItemsByPriceSubs = this.quoteService.loadAllCompaniesByPrice.subscribe(
      res => {
        console.log('sort', res);
        this.items = res;
        console.log('alllllllll', this.items);
      }
    );
    if (localStorage.getItem('medical') === 'medical') {
      this.quoteService.sortMedicalCompaniesByPrice(sort);
    } else {
      this.quoteService.sortCompaniesByPrice(this.brandId, this.price, sort);
    }
  }

  getByPlan(val) {
    console.log(val);
    if (localStorage.getItem('medical') === 'medical') {
      console.log(val);
    } else {
      console.log(val);
      // if (val === 'all') {
      //   this.loadItemsSubs = this.quoteService.loadAllCompanies.subscribe(res => {
      //     this.items = res;
      //   });
      //   this.quoteService.getAllCompaniesData({
      //     id: this.brandId,
      //     price: this.price
      //   });

      //   return;
      // }
      // this.loadItemsByFilterSubs = this.quoteService.loadAllCompaniesByFilter.subscribe(
      //   res => {
      //     this.items = res;
      //   }
      // );
      // this.quoteService.getByPlan(this.brandId, this.price, val);
    }
  }

  ngOnDestroy() {
    if (this.loadItemsSubs) {
      this.loadItemsSubs.unsubscribe();
    }
    if (this.loadItemsByPriceSubs) {
      this.loadItemsByPriceSubs.unsubscribe();
    }
    if (this.loadItemsByFilterSubs) {
      this.loadItemsByFilterSubs.unsubscribe();
    }
  }
}
