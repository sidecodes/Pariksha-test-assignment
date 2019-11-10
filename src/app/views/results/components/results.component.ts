
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil'

import { ResultsService } from '../state/results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  ngUnsubscriber: Subject<any> = new Subject<any> ();
  userDetails: any;
  allQuestions: any[];

  constructor(private _resultSvc: ResultsService,
    private _router: Router) { 
      this.allQuestions = this._resultSvc.getQuestions();
      this.userDetails = this._resultSvc.getUserDetails();
      console.log(this.userDetails);
  }
 
  ngOnInit() {
  }

  traverseHome() {
    this._router.navigate(['home']);
  }

  ngOnDestroy() {
    this.ngUnsubscriber.next();
    this.ngUnsubscriber.complete();
  }
}
