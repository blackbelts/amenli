import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-insurance',
  templateUrl: './type-insurance.component.html',
  styleUrls: ['./type-insurance.component.css']
})
export class TypeInsuranceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(type) {
    this.router.navigate(['/','insurance'], {queryParams: {'type': type}})
    .then(()=> {
      window.scrollTo(0,0);
    })
  }

}
