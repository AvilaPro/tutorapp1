import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evbind',
  templateUrl: './evbind.component.html',
  styleUrls: ['./evbind.component.css']
})
export class EvbindComponent implements OnInit {
  constructor() {
    console.log('Componente Header Creandose!')
   }
  ngOnInit(): void {
    console.log('Componente ya creado XD')
  }
  nombre = "Eduardo"
  contador = 0
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  add() {
    this.arr.push(Math.random()*10)
  }
  cambiarNombre() {
    this.nombre += " Mejias"
  }
  suma() {
    this.contador += 1
  }
  verSeleccion(nombre){
    console.log(nombre);
    let p = nombre.target.innerHTML;
    console.log(p);
    alert('el click fue en:' + p)
  }

}
