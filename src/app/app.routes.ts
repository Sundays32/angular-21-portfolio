import { Routes } from '@angular/router';
import { PortfolioPage } from './portfolio-page/portfolio-page';

export const routes: Routes = [
    {path:'', component:PortfolioPage},
    {path:'**', redirectTo:''},
];
