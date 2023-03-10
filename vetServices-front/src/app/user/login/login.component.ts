import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'fbapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,FbappPage {
  public pageTitle = 'Se connecter';
  @ViewChild('login', { static: false }) loginInput: ElementRef;
  public firstName$!: Observable<string>;
  FormLogin: FormGroup;
  constructor(private readonly userService: UserService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormLogin = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
      'password': new FormControl('',[
        Validators.required,
      ]),
    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormLogin.get('email'); }

  get password() { return this.FormLogin.get('password'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public onSubmit(formDir): void {

    const { email, password } = formDir.value;
    this.firstName$=this.userService.authenticate(email, password).pipe(
      map((user) => {
        //localStorage.setItem("user",JSON.stringify(user));
        //localStorage.removeItem("user")
        //localStorage.getItem("user")
        console.log(user);
        this.goToHome();
        return null;
      }),
      catchError(() => {
        this.resetForm(formDir);
        return of('Login failed');
      }),
    );
  }
  private resetForm(formDir: NgForm): void {
    formDir.reset();
    this.loginInput.nativeElement.focus();
  }


}

