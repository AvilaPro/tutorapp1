import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-att',
  templateUrl: './dir-att.component.html',
  styleUrls: ['./dir-att.component.css']
})
export class DirAttComponent implements OnInit {

  siCheck : boolean = false;
  aRojo : boolean = false;
  aVerde : boolean = false;
  aPurpura : boolean = false;
  cuadro : boolean = true;

  cambio : boolean = false;

  cambioClases : {};
  setCambioClases() {
    this.cambioClases = {
      'rojo': this.aRojo,
      'verde': this.aVerde,
      'purpura': this.aPurpura,
      'cuadrado': this.cuadro
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.setCambioClases();
  }

}
