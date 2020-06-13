import { Component, OnInit } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-dir-est',
  templateUrl: './dir-est.component.html',
  styleUrls: ['./dir-est.component.css']
})
export class DirEstComponent implements OnInit {

  estaLogueado : boolean = false;
  nivel = 0;

  materias = [
    "Git",
    "Logica de Programacion",
    "Html y Css",
    "JavaScript",
    "Angular",
    "Ionic",
    "Laravel"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
