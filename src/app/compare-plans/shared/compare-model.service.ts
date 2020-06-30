import { Injectable } from '@angular/core';
import { OdooService } from 'src/app/shared/odoo.service';
import { Subject } from 'rxjs';

@Injectable()
export class CompareModelService {
    loadPlans = new Subject<any>();
    constructor(private odooService: OdooService) {}

    getPlans(companyName, brandId, price) {
        if (localStorage.getItem('medical') === 'medical') {
            const data = { paramlist: {data: {dob: parseInt(localStorage.getItem('dob')), name: companyName}}};
            this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
            'get_medical_company', data).subscribe(res => {
                if (res) {
                    this.loadPlans.next(res);
                    console.log('plans', res);
                }
            }, error => console.log(error));

        } else {
            const data = { paramlist: {data: {id: parseInt(brandId), price: parseInt(price), name: companyName}}};

            this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
            'get_company', data).subscribe(res => {
                if (res) {
                    this.loadPlans.next(res);
                    console.log('plans', res);
                }
            }, error => console.log(error));
        }
    }
}
