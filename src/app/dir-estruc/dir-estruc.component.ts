import { Estudiante } from './../estudiantes/estudiante';
import { Component, OnInit } from '@angular/core';
import { ESTUDIANTES } from "../estudiantes/estudiantes-simulados";
@Component({  selector: 'app-dir-estruc',
  templateUrl: './dir-estruc.component.html',
  styleUrls: ['./dir-estruc.component.css'] })
export class DirEstrucComponent implements OnInit {
  isLogged : boolean = false;





  verReprobado : boolean = true;
  estudiante : Estudiante;
  estudiantes = ESTUDIANTES;
  constructor() { }

  ngOnInit(): void {
  }

}
