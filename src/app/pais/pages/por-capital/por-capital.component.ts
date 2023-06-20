import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capita.interface';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {



  placeholderCapital:string='Buscar capital...'
  termino:string='';
  hayError:boolean=false;
  capitales:Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {

  }



  buscar(termino:string){

    this.hayError = false;

    this.paisService.buscarCapital(termino).subscribe(

      capitales=>{
        this.capitales = capitales;
        console.log(this.capitales);
      },
      error=>{
        console.log(error);
        this.capitales=[];
      }

    );

  }


  filtradoHijo(termino:string){

  }
}
