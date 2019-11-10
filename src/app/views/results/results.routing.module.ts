import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../guards/auth.guard';
import { ResultsComponent } from './components/results.component';

const resultsRoutes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(resultsRoutes)],
  exports: [RouterModule]
})

export class ResultsRoutingModule { }
