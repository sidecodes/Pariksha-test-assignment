
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  signUpForm: boolean;
  ngUnsubscriber: Subject<any> = new Subject<any> ();

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('currentUser', JSON.stringify(this.model.userName));
    localStorage.setItem('currentUserToken', JSON.stringify("DFFFFF34563435663HHH"));
    window.localStorage.setItem('environmentReady', "1");
    this._router.navigate(['/home']);
  }

  signUp(pValue) {
    this.signUpForm = pValue;
  }

  signUpUser() {
    this.login();
  }

  ngOnDestroy() {
    this.ngUnsubscriber.next();
    this.ngUnsubscriber.complete();
  }
}
