import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private share: SharedService) {
    console.log('start');
    console.log('start1');
  //   this.share.getJson().subscribe(res => {
  //     console.log(res);
  // });
   }

  ngOnInit() {
  }

}
