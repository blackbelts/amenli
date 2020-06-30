import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { InsuranceService } from './insurance.service';
import { Insurance } from './insurance.model';

@Component({
  selector: 'app-insurance-services',
  templateUrl: './insurance-services.component.html',
  styleUrls: ['./insurance-services.component.css']
})
export class InsuranceServicesComponent implements OnInit {
  type: string;
  result: 'individual' | 'group';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private insuranceService: InsuranceService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      if (!paramMap.has('type')) {
        return this.router.navigateByUrl('/');
      }

      this.type = paramMap.get('type');

      // this.result = this.insuranceService.getServiceByTag(this.type);

    });

  }



}
