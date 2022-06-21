import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
                private activateRoute: ActivatedRoute,
                private paisService: PaisService
              ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(  //OBTIENE EL PARAMETRO DE LA RUTA O URL Y LO ASIGNA A OTRO OBSERBABLE(LA FUNCION DE GETPAIS)
      switchMap( ({id}) => this.paisService.getPaisAlpha(id)),
      //tap(console.log)//IMPRIME EN CONSOLA LO QUE RESPONDA EL SWITCHMAP
    )
    .subscribe(pais=> this.pais=pais);//ASIGNANDO LA RESPUESTA A UNA VARIABLE

    /*this.activateRoute.params
    .subscribe( ({id})=>{
      console.log(id );

      this.paisService.getPaisAlpha(id)
      .subscribe(pais=>{
        console.log(pais);
      });
    });*/

  }

}
