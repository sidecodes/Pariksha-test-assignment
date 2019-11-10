import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { UserService } from './state/user.services';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent   
    ],
    providers:[
        UserService
    ]
})

export class LoginModule {}
