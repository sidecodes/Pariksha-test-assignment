import { Injectable } from '@angular/core';

import { questions } from '../../home/state/home.config';

@Injectable()
export class ResultsService {

    constructor(
       
    ) { }

    getUserDetails() {
        return localStorage.getItem('currentUser');
    }

    getQuestions() {
        return questions;
    }
}
