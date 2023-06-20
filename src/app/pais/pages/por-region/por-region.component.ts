import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {


  listaRegiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string='';

  tablaRegiones:Country[]=[];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getRegionValue(region:string){


    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region).subscribe(
      data =>{
        this.tablaRegiones= data;
        console.log(this.tablaRegiones);
      },
      error =>{
        console.error(error);
        this.tablaRegiones=[];
      }
    );



  }





}
