import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { HomeViewComponent } from './components/home-view.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeService } from './state/home.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeViewComponent   
    ],
    providers:[
       HomeService
    ]
})

export class HomeModule {}
