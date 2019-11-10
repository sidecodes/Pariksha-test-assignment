import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        AlertComponent,
        HeaderNavBarComponent, 
    ],
    providers:[
       
    ],
    exports: [
        AlertComponent,
        HeaderNavBarComponent
    ]
})

export class CoreModulesModule {}
