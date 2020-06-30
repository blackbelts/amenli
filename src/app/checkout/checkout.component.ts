import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  plan_selected: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("plan_selected")) {
        this.router.navigateByUrl("");
      }

      this.plan_selected = paramMap.get("plan_selected");

    });


  }



}
