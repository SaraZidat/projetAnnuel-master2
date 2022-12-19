import { Injectable } from '@angular/core';
import { VeterinaireModel } from './veterinaire-add/VeterinaireModel';
import { Veterinaire } from './Veterinaire';
import { VeterinaireShape } from './VeterinaireShape';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, switchMap,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  //uri = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) { }
  public add(VeterinaireCreate: VeterinaireModel){
    return this.httpClient.post(`${this.uri}/api/veterinaires`, VeterinaireCreate)
      .subscribe(veterinaire => {
        console.log(veterinaire);

      });
  }
  public getList(): Observable<VeterinaireShape[]>{
    return this.httpClient.get<VeterinaireShape[]>(`${this.uri}/api/veterinaires`);

  }
  public getListVeterinaireInvalide(): Observable<any[]>{
    return this.getList().pipe(
      map((veterinaires:Veterinaire[])=>{
        const veterinaireNotValidate =veterinaires.filter(obj=>
          obj.isValidate!=true
        );
        return Veterinaire.NEW_BUNCH(veterinaireNotValidate);
    }))
  }
  public getListVeterinaireValide(): Observable<Veterinaire[]>{
    return this.getList().pipe(
      map((veterinaires:Veterinaire[])=>{
        const veterinaireNotValidate =veterinaires.filter(obj=>
          obj.isValidate==true
        );
        return Veterinaire.NEW_BUNCH(veterinaireNotValidate);
    }))
  }

  public findOne(VeterinaireId: string): Observable<Veterinaire>{
    return this.httpClient.get<Veterinaire>(`${this.uri}/api/veterinaires/${VeterinaireId}`);

  }
  public ValidateVeterinaire(veterinaire:Veterinaire): Observable<Veterinaire[]>{
    this.updateValidateVeterinaire(veterinaire);
    return this.getListVeterinaireInvalide();

  }
  public updateValidateVeterinaire(veterinaire:Veterinaire){
    console.log(`${this.uri}/api/veterinaires/${veterinaire._id}`,{"isValidate": true})
    this.httpClient.patch(`${this.uri}/api/veterinaires/${veterinaire._id}`,{"isValidate": true}).subscribe((veterinaire)=>{ return veterinaire});

  }

}
