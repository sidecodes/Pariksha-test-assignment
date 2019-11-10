
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.scss']
})

export class HeaderNavBarComponent implements OnInit {

  constructor(private _router: Router) { 
  }
 
  ngOnInit() {
  }

  logout() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserToken');
      localStorage.removeItem('environmentReady');
      this._router.navigate(['login']);
  }
  
}
