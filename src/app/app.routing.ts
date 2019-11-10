import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  {path: 'home', canActivate: [AuthGuard], loadChildren: './views/home/home.module#HomeModule'},
  {path: 'results', canActivate: [AuthGuard], loadChildren: './views/results/results.module#ResultsModule'},
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
