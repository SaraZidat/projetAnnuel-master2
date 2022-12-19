import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { VeterinaireService } from '../veterinaire.service';
import { Veterinaire} from '../Veterinaire';
import { Router } from '@angular/router';

import { DataLoaderService } from 'src/app/shared/data-loader.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  templateUrl: './veterinaire-list.component.html',
  styleUrls: ['./veterinaire-list.component.scss'],
  providers: [DataLoaderService],
})
export class VeterinaireListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des veterinaires';
  public readonly filterPlaceholder = 'Filtrer par nom';
  public veterinaires$: Observable<Veterinaire[]>;

  public filterInput!: string;
  constructor(
    private readonly VeterinaireService: VeterinaireService,
    private readonly veterinairesLoaderService: DataLoaderService<Veterinaire[]>,
    private readonly userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {

    this.initVeterinairesLoader();

    this.listVeterinaires();

  }
  public onFilter(): void {
    this.veterinairesLoaderService.transform(veterinaires => {

      return veterinaires.filter(veterinaire => {
        return veterinaire.nameStartsWith(this.filterInput);
      });
    });
  }
  public reset(): void {
    this.veterinairesLoaderService.reset();
    this.filterInput = '';
  }
  public onSelectVeterinaire(veterinaireId: string): void {
    this.router.navigateByUrl("/veterinaires/"+veterinaireId);


  private initVeterinairesLoader(): void {
    const veterinaires$ = this.listVeterinaires();
    this.veterinairesLoaderService.init(veterinaires$);
    this.veterinaires$ = this.veterinairesLoaderService.stream$;
  }

  private listVeterinaires(): Observable<Veterinaire[]>{

    return this.VeterinaireService.getListVeterinaireValide();
  }
}
