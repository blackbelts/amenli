import { Injectable } from '@angular/core';

@Injectable()
export class CollbrationsService {
    collbrations = [
        'assets/images/insurer1.png',
        'assets/images/insurer2.png',
        'assets/images/insurer3.png',
        'assets/images/insurer1.png',
        'assets/images/insurer2.png'
    ];
    constructor() {}

    get Collbrations() {
        return [...this.collbrations];
    }
}
