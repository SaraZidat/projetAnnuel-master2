import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import {AdminService } from '../admin.service';
import { FbappPage } from 'src/app/shared/FbappPage';
import { VeterinaireService } from '../../veterinaire/veterinaire.service';
import { Veterinaire} from '../../veterinaire/Veterinaire';
import { Router } from '@angular/router';

import { DataLoaderService } from 'src/app/shared/data-loader.service';


@Component({
  selector: 'fbapp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataLoaderService],
})
export class DashboardComponent implements OnInit {

  public readonly pageTitle = 'Liste des veterinaires en attente de validation';
  public veterinaires$: Observable<Veterinaire[]>;

  public filterInput!: string;
  constructor(
    private readonly veterinaireService: VeterinaireService,
    private readonly veterinairesLoaderService: DataLoaderService<Veterinaire[]>,
    private readonly adminService: AdminService,
    private router: Router

  ) { }

  ngOnInit() {

    this.initveterinairesLoader();

    this.listVeterinaires();

  }
  public reset(): void {
    this.veterinairesLoaderService.reset();
    this.filterInput = '';
  }

  private initveterinairesLoader(): void {
    const veterinaires$ = this.listVeterinaires();
    this.veterinairesLoaderService.init(veterinaires$);
    this.veterinaires$ = this.veterinairesLoaderService.stream$;
  }

  private listVeterinaires(): Observable<Veterinaire[]>{

    return this.veterinaireService.getListVeterinairesInvalide();
  }
  public isValid(veterinaire:Veterinaire){

    this.veterinaires$=this.veterinaireService.ValidateVeterinaire(veterinaire);

  }
}



