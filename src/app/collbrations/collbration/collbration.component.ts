import { Component, OnInit } from '@angular/core';
import { CollbrationsService } from '../collbrations.service';

@Component({
  selector: 'app-collbration',
  templateUrl: './collbration.component.html',
  styleUrls: ['./collbration.component.scss']
})
export class CollbrationComponent implements OnInit {
  responsiveOptions: Object[];
  collbrations: string[];
  constructor(private colService: CollbrationsService) {
   }

  ngOnInit() {
    this.collbrations = this.colService.Collbrations;
    console.log(this.collbrations);
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

}
