import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string="";
  regionResp:Country[]=[];
  constructor(private paisService:PaisService) { }

  regresaRegion(region:string){
    if(region===this.regionActiva){
      return;
    }

    this.regionActiva=region;
    this.regionResp=[];
    
    this.paisService.getPaisRegion(region)
      .subscribe(region=>{
        this.regionResp=region
        console.log(this.regionResp);
      });

  }

  getClaseCss(region:string):string{
    return(region === this.regionActiva)
          ?'btn btn-primary'
          :'btn btn-outline-primary'

  }

}
