import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaireAddComponent } from './veterinaire-add/veterinaire-add.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { VeterinaireRoutingModule } from './veterinaire-routing.module';
import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';
import { VeterinaireThumbnailComponent } from './veterinaire-thumbnail/veterinaire-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [VeterinaireAddComponent, VeterinaireListComponent, VeterinaireThumbnailComponent, VeterinaireDetailsComponent,],
  imports: [
    CommonModule,
    VeterinaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductModule
  ],

})
export class VeterinaireModule { }
