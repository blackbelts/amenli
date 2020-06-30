import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: any[] = [
    {source: 'assets/images/slides/slide22.jpg', alt: 'slide 1', title: ''},
    {source: 'assets/images/slides/slide-tr.jpg', alt: 'slide 2', title: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
