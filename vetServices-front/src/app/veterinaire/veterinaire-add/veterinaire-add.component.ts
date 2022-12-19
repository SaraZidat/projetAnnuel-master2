import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinaireService } from '../veterinaire.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fbapp-veterinaire-add',
  templateUrl: './veterinaire-add.component.html',
  styleUrls: ['./veterinaire-add.component.scss']
})
export class VeterinaireAddComponent implements OnInit,FbappPage {
  public pageTitle = 'Créer un Partenariat';
  veterinaires: Array<any>;
  newveterinaire: any;
  requesting: boolean;
  FormVeterinaire: FormGroup;
  public veterinaireName$!: Observable<string>;

  constructor(private readonly veterinaireService: VeterinaireService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormVeterinaire = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      'name': new FormControl('',[
        Validators.required,
      ]),


    });
    this.requesting = false;
  }
  get email() { return this.FormVeterinaire.get('email'); }
  get name() { return this.FormVeterinaire.get('name'); }
  get password() { return this.FormVeterinaire.get('password'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public onSubmit(formDir): void {

    const formRes = {
      ...formDir.value,
      createDate: new Date().toISOString()
      .split("T")[0],
    }
    this.veterinaireService.add(formRes);
      this.goToHome();
  };

}

