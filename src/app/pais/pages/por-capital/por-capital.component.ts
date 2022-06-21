import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  capitales: Country[]=[];
  error: boolean = false;
  mostrarSugerencias: boolean = false;
  capitalesSugeridos: Country[]=[];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.error = false;
    this.termino=termino;
    this.mostrarSugerencias=false;

    this.paisService.buscarCapital(this.termino)
    .subscribe( (res) => {
      //console.log(res);
      this.capitales=res;
      

     
    }, (err)=>{
        this.error=true;
        this.capitales=[];
    });
  }

  sugerencias(termino:string){
    this.error=false;
    this.termino = termino;
    this.mostrarSugerencias=true;

    this.paisService.buscarCapital(termino)
    .subscribe(
      paises => this.capitalesSugeridos=paises.splice(0,3),
      (err) => this.capitalesSugeridos = []
    );

  }

}
