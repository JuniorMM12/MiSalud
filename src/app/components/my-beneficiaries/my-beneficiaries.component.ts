import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INPUTS_DATA } from 'src/app/shared/constants/input-data';
import { DISPLAY_COLUMN } from 'src/app/shared/constants/table-column';

@Component({
  selector: 'app-my-beneficiaries',
  templateUrl: './my-beneficiaries.component.html',
  styleUrls: ['./my-beneficiaries.component.css']
})
export class MyBeneficiariesComponent implements OnInit {
  public element_data: any[] = [{
    Id: 1,
    Nombres: "ewd",
    Apellidos: 'de', 
    Genero:'ed', 
    Edad: 2, 
    Correo: 'de@ds.cd'
  }];
  public columns = DISPLAY_COLUMN;
  public title = "Registrar beneficiarios";
  public inputValue = INPUTS_DATA;
  public idComponent;

  constructor( private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.idComponent = this.ruta.snapshot.paramMap.get("id");
  }

}
  