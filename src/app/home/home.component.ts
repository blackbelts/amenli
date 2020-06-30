import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  param1: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param1 = params.home;
      if (this.param1 === 'home') {
        setTimeout(() => {
          location.reload();
        }, 2000);
        this.param1 = 'x';
        this.router.navigate(['/']);
      } else if (this.param1 === 'section1') {
        // this.router.navigate(['/home/']);
        // location.reload();
        window.location.href = 'http://207.154.195.214/amenli/home#section1';
        // this.router.navigate(['/home/'], { fragment: 'section1' });
        // window.location.reload();
        // this.router.navigated = false;
        // location.reload();
      } else if (this.param1 === 'quotes') {
        // this.router.navigate(['/home/']);
        // location.reload();
        // this.router.navigate(['/home/'], { fragment: 'quotes' });
        window.location.href = 'http://207.154.195.214/amenli/home#quotes';
          // Do something after
        // window.location.reload();
        // this.router.navigated = false;
        // location.reload();
        // // window.location.hash = '';
        // // window.location.hash = 'quote';
      }
  });
   }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end'});
      }
    });
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
    // this.ngOnInit();

}
