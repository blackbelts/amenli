import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class SharedService {
    jsonURL = 'assets/jsonFiles/Sheet1.json';
    constructor() {
        console.log( ' shared service');
    } 

    // getJson() {
    //    return this.http.get(this.jsonURL);
    // }

    saveInLocalStorage(data: object) {
        let company_name = Object.keys(data);
        let company_val = Object.values(data);
        localStorage.setItem(company_name[0].toString(), company_val[0].toString());
    }
}