
import { FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { OdooService } from '../../shared/odoo.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CheckoutService {
    form = new FormGroup({
        cardNumber: new FormControl(null,
           {
                updateOn: 'blur',
                validators: [Validators.required]
            }
        ),
        name: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
         email: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required, Validators.email]
             }
         ),
         phone_number: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
        //  number: new FormControl(null,
        //     {
        //          updateOn: 'blur',
        //          validators: [Validators.required]
        //      }
        //  ),
         expDate: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
         securityCode: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required, Validators.minLength(3)]
             }
         ),
         re_address: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         )
    });


    cashForm = new FormGroup({

        name: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
         phone_number: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
         email: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required, Validators.email]
             }
         ),
         address: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         ),
         re_address: new FormControl(null,
            {
                 updateOn: 'blur',
                 validators: [Validators.required]
             }
         )



    });
    loadPlan = new Subject<any>();
    constructor(private odooService: OdooService) {}

    getPlanCompany(brandId, price, companyName, filter) {
        if (localStorage.getItem('medical') === 'medical') {
            const data = {paramlist: {data: {'dob': parseInt(localStorage.getItem('dob')), 'name': companyName, 'filter': filter}}};
            this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
            'get_medical_plan_company', data).subscribe(res => {
                if (res) {
                    this.loadPlan.next(res);
                    console.log('plan => ', res);
                }
            }, error => console.log(error));
        } else {
        const data = {paramlist: {data: {'id': parseInt(brandId), 'price': parseInt(price), 'name': companyName, 'filter': filter}}};
        console.log('===>', data);
        this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
        'get_plan_company', data).subscribe(res => {
            if (res) {
                this.loadPlan.next(res);
                console.log('plan => ', res);
            }
        }, error => console.log(error));
    }
    }

    submitTicket(data: object) {
        console.log('data object', data);
        const result = {paramlist: {data}};
        return this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'ticket.api',
        'create_ticket', result);
    }
}
