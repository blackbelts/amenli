import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {
  activeIndex: number = 1;
  items ;
  status = false;
  val: string;

  constructor(private route: ActivatedRoute) {
  }

  get lang() {return localStorage.getItem('lang'); }

  ngOnInit() {
    this.items = [
      {
        label: "Plan",
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: "Choose",
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: "Checkout",
        command: (event: any) => {
          this.activeIndex = 2;
        }
      }
    ];
    this.route.url.forEach(segment => {
      console.log(segment);
      console.log(Object.keys(segment));
      if (Object.keys(segment).length !== 0) {
        console.log(segment[1].path);
        if (segment[0].path === 'companies') {
          this.status = true;
          this.val = 'home';
        } else {
          this.status = false;

          if (segment[0].path === 'plan') {
              this.val = 'plan';
          } else {
            this.val = 'checkout';
          }
        }
      }
    });
  }



}
