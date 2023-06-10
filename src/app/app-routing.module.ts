import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsersComponent} from './users/users.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { CoursiersComponent } from './coursiers/coursiers.component';
import { OrdersComponent } from './orders/orders.component';
import { NeworderComponent } from './neworder/neworder.component';
import { NewcoursierComponent } from './newcoursier/newcoursier.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  { path: 'coursiers', component:NewcoursierComponent},
  { path: 'orders', component:NeworderComponent},
  { path: 'orders/list', component:OrdersComponent},
  { path: 'coursiers/list', component: CoursiersComponent},
  { path: 'categories/list', component: DashboardComponent},
  { path: 'categories/modify/:id', component: NewcategoryComponent},
  { path: 'categories/add', component: NewcategoryComponent},
  { path: 'users', component: NewuserComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: UsersComponent},
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
