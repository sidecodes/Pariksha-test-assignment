import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultsComponent } from './components/results.component';
import { ResultsRoutingModule } from './results.routing.module';
import { ResultsService } from './state/results.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ResultsRoutingModule
    ],
    declarations: [
        ResultsComponent   
    ],
    providers:[
        ResultsService
    ]
})

export class ResultsModule {}
