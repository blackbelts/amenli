import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  options: any;

  overlays: any[];
  constructor() { }

  ngOnInit() {
    this.options = {
      center: {lat: 30.1043776, lng: 31.3785661
      },
      zoom: 12
  };
    this.overlays = [
    new google.maps.Marker({position: {lat: 30.1039544, lng: 31.3787408}, title: "Amenli"}),
];

  }

}
