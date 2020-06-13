import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-ref',
  templateUrl: './var-ref.component.html',
  styleUrls: ['./var-ref.component.css']
})
export class VarRefComponent implements OnInit {

  mensaje1(value:string){
    console.warn('el texto es: '+value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
