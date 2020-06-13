import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  nombre = 'Eduardo';
  logo = "assets/imgs/cadif1Logo.jpg";
  verApellido() {
    return 'Mejias';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
