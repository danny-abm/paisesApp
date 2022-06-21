import { Component, Input } from "@angular/core";
import { Capital } from "../../interfaces/capital.interface";
import { Country } from "../../interfaces/pais.interface";

@Component({
    selector: 'app-pais-tabla',
    templateUrl: './pais-tabla.component.html',
    styles: [
    ]
  })
  export class PaisTablaComponent  {
    
   @Input() paises: Country[]=[];
   @Input() capitales: Capital[]=[];

    constructor() { }
  
  
  
  }
  