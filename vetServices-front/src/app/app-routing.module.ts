import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', loadChildren: () => import('./root/root.module').then(m => m.RootModule), canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', loadChildren: () => import('./root/root.module').then(m => m.RootModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'veterinaires', loadChildren: () => import('./veterinaire/veterinaire.module').then(m => m.VeterinaireModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
