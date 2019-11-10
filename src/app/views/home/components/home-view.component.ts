
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil'

import { questions, resetSelectedIndex } from '../state/home.config';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})

export class HomeViewComponent implements OnInit {
  ngUnsubscriber: Subject<any> = new Subject<any> ();
  timeLeft: number = 120;
  interval;
  currentQuestion: any;
  counter: number;
  questions: Array<any> = [];

  constructor(private _router: Router) { 
  }
 
  ngOnInit() {
      resetSelectedIndex();
      this.questions = questions;
  }

  startTimer() {
    this.counter = 0;
    this.currentQuestion = this.questions[this.counter];

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.submitTest();
      }
    },1000)
  }

  nextQuestion() {
    this.counter ++;
    this.currentQuestion = this.questions[this.counter]

  }

  previousQuestion() {
    this.counter --;
    this.currentQuestion = this.questions[this.counter]
  }

  setSelectedAnswer(pIndex) {
    this.currentQuestion.selectedAnswerIndex = pIndex;
  }

  submitTest() {
    this._router.navigate(['/results']);
  }
  
}
