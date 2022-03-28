import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERNS } from 'src/app/shared/constants/input-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mostrarMensaje: boolean = false;
  public form: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loadInput();
  }
  registrar() {
    if (this.form.invalid == false) {
      this.mostrarMensaje = false;
      let valoresRegister = {
        first_name: this.form.get("name").value,
        pass: this.form.get("pass").value,
        last_name: this.form.get("lastname").value,
        gender: this.form.get("genere").value,
        age: this.form.get("age").value,
        emaild: this.form.get("email").value
      }
      console.log(valoresRegister);
    } else {
      this.mostrarMensaje = true;
    }
  }
  loadInput() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
      ])],
      pass: ['', Validators.compose([
        Validators.required,
      ])],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      genere: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      age: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.email),
      ])],
    })
  }
  irTo() {
    this.router.navigate(['/login']);
  }

}
