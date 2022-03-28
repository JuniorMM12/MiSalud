import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERNS } from 'src/app/shared/constants/input-data';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public mostrarMensaje = false;

  constructor(public fb: FormBuilder,
    private login: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadInput();
  }
  loadInput(){
    this.form = this.fb.group({
      user:['',Validators.compose([
         Validators.required,
       ])],
       pass:['',Validators.compose([
        Validators.required,
      ])],
  })
}

  ingresar(){
    if (this.form.invalid == false) {
      this.mostrarMensaje = false;
      let users = {
        username : this.form.get("user").value,
        password :this.form.get("pass").value
      }
      this.login.valideUser(users);
    }else{
      this.mostrarMensaje = true;
    }
  }
  irTo() {
    this.router.navigate(['/register']);
  }
}
