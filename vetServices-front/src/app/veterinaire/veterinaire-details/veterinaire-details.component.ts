import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Veterinaire } from '../Veterinaire';
import { VeterinaireService } from '../veterinaire.service';
import { Product } from '../../product/Product.entity';
import { ProductService } from '../../product/product.service';


@Component({
  selector: 'fbapp-veterinaire-details',
  templateUrl: './veterinaire-details.component.html',
  styleUrls: ['./veterinaire-details.component.scss']
})
export class VeterinaireDetailsComponent implements OnInit {
  public veterinaire$!: Observable<Veterinaire>;

  public products$!: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private products:ProductService, private veterinaires:VeterinaireService) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.veterinaire$=this.veterinaires.findOne(id);
    this.products$=this.products.getListProduct(id);

  }

}
