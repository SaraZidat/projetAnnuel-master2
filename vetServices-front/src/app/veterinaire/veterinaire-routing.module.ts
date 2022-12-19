import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeterinaireAddComponent } from './veterinaire-add/veterinaire-add.component';
import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';



const routes: Routes = [
  { path: 'partners', component: VeterinaireAddComponent },
  { path: ':id', component: VeterinaireDetailsComponent },
  { path: '', pathMatch: 'full', component: VeterinaireListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinaireRoutingModule { }
