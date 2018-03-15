import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetComponent } from './asset/asset.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetLocationComponent } from './asset-location/asset-location.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'asset', component: AssetComponent },
  { path: 'asset/categories', component: AssetCategoriesComponent },
  { path: 'asset/location', component: AssetLocationComponent },
  { path: 'user/manage', component: UserManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }