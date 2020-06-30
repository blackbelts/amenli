import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
  display = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  get lang() { return localStorage.getItem('lang') }

  sidenavClosed() {
    console.log('weel done');
  }

  changeStatus() {
    this.display = true;
  }

  onClose() {
    this.display = false;
  }
  onNavigate() {
    this.router.navigate(['/get_quote'])
    .then(() => {
      window.location.reload();
      
    });

    
  }

}
