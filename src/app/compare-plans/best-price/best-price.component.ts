import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { QuotesService } from "src/app/quotes/shared/quotes.service";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared/shared.service";
import { PlatformLocation } from "@angular/common";

@Component({
  selector: "app-best-price",
  templateUrl: "./best-price.component.html",
  styleUrls: ["./best-price.component.css"]
})
export class BestPriceComponent implements OnInit, OnDestroy {
  display = false;
  length = 0;
  price = 0;
  loadPriceSub: Subscription;
  plan_selected;
  loadNumCompaniesSub: Subscription;
  company_name: string;
  company_selected: string;
  imagePath = 'assets/images/logo-amenli.png';
  medicalImagePath = 'assets/images/logo-amenli.png';
  @ViewChild("f", { static: true }) form: NgForm;
  constructor(
    private quoteService: QuotesService,
    private locations: PlatformLocation,
    private router: Router,
    private shared: SharedService
  ) {
    locations.onPopState(() => {
      location.reload();
    });
  }

  ngOnInit() {
    this.loadPriceSub = this.quoteService.loadLowestPrice.subscribe(res => {
      this.price = res.price;
      this.company_name = res.name;
      this.plan_selected = res.type;
      this.length = res.num_company;
      this.company_selected = JSON.stringify(res[1]);

      console.log("json string", this.company_selected);
    });
  }

  showDialog() {
    this.display = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log("form invalid");
      return;
    }

    if (localStorage.getItem("medical") === "medical") {
      localStorage.setItem("dob", this.quoteService._dataList.dob);

      this.router.navigate([
        "/",
        "checkout",
        "payment",
        this.company_name,
        this.plan_selected,
        this.quoteService._dataList.dob,
        this.medicalImagePath
      ]);
    } else {
      console.log(form.value.price);
      console.log("Successs");
      console.log(this.plan_selected);
      localStorage.setItem("brandId", this.quoteService._dataList.id);
      localStorage.setItem("price", this.quoteService._dataList.price);

      this.router.navigate([
        "/",
        "checkout",
        "payment",
        this.company_name,
        this.plan_selected,
        this.quoteService._dataList.id,
        this.quoteService._dataList.price,
        this.imagePath
      ]);

    }
  }

  validPrice() {
    return this.form.value.price > 0;
  }

  onClick() {
    if (localStorage.getItem("medical") === "medical") {
      const dataList = this.quoteService._dataList;
      localStorage.setItem("dob", dataList.dob);
      this.router.navigate(['/', 'plan', 'choose', this.company_name, this.plan_selected, dataList.dob]).then(res =>  scrollTo(0, 0));

      // this.router.navigate(["/", "companies", "choose", dataList.dob]);
    } else {
      const dataList = this.quoteService._dataList;
      localStorage.setItem("brandId", dataList.id);
      localStorage.setItem("price", dataList.price);
      this.router.navigate([
        "/",
        "plan",
        "choose",
        this.company_name,
        this.plan_selected,
        this.quoteService._dataList.id,
        this.quoteService._dataList.price.toString()
      ]);
      // this.router.navigate([
      //   "/",
      //   "companies",
      //   "choose",
      //   dataList.id,
      //   dataList.price
      // ]);
      // let data = { plans_selected: this.company_selected };
      // this.shared.saveInLocalStorage(data);
      // this.router.navigate(['/','plan', 'choose', this.company_name, 'gold']);
    }
  }

  ngOnDestroy() {
    if (this.loadPriceSub) {
      this.loadPriceSub.unsubscribe();
    }
  }
}
