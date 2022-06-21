import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }

    a{
      text-decoration: none;
      text-decoration-color:none;
    }
    `


  ]
})
export class PorPaisComponent {

  termino: string = '';
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  error: boolean = false;
  mostrarSugerencias: boolean = false;
  

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.error = false;
    this.mostrarSugerencias=false;
    this.termino=termino;

    this.paisService.buscarPais(this.termino)
    .subscribe( (res) => {
      //console.log(res);
      this.paises=res;
      

     
    }, (err)=>{
        this.error=true;
        this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.error=false;
    this.termino = termino;
    this.mostrarSugerencias=true;

    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos=paises.splice(0,3),
      (err) => this.paisesSugeridos = []
    );

  }

  

}
