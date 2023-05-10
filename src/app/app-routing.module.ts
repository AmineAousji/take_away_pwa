import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsersComponent} from './users/users.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { CoursiersComponent } from './coursiers/coursiers.component';

const routes: Routes = [
  { path: 'coursiers/list', component: CoursiersComponent},
  { path: 'categories/list', component: DashboardComponent},
  { path: 'categories', component: NewcategoryComponent},
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
