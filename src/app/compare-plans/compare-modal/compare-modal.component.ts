import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-modal',
  templateUrl: './compare-modal.component.html',
  styleUrls: ['./compare-modal.component.css']
})
export class CompareModalComponent implements OnInit, AfterViewInit {
  items;
  display = false;
  // @Input('returnVal')  value: boolean;
  @Input() isModal: boolean;
  constructor(private router: Router) { 
    console.log(this.isModal);
  }

  ngOnInit() {
    this.items = [
      {
        imageUrl: 'assets/images/AIG.png',
        isShow: true,
        price: 350,
        currency: 'EGP/monthly'
      },
      {
        imageUrl: 'assets/images/Allianz.png',
        isShow: false,
        price: 450,
        currency: 'EGP/monthly'
      },
      {
        imageUrl: 'assets/images/MetLife2.jpg',
        isShow: false,
        price: 550,
        currency: 'EGP/monthly'
      }
    ];

    // console.log('compare', this.value);
  }
  ngAfterViewInit () {

  }
  showDialog() {
    this.display = true;
  }

  showMsg() {
    this.display = false;
  }
  goNavigate() {
    this.router.navigate(['/plan/choose']);
  }
}
