import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetComponent } from './asset/asset.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetLocationComponent } from './asset-location/asset-location.component';

const routes: Routes = [
  { path: '', redirectTo: '/1', pathMatch: 'full' },
  { path: '1', component: HomeComponent },
  { path: '2', component: DashboardComponent },
  { path: '101', component: AssetComponent },
  { path: '102', component: AssetCategoriesComponent },
  { path: '103', component: AssetLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }