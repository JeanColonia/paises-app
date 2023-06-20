import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {


  placeholderPais:string='Buscar pais...';
  termino:string='';
  hayError:boolean=false;

  paises:Country[]=[];
  paisesSugeridos:Country[]=[];

  constructor(private paisService:PaisService) { }

mostrarSugerencias:boolean=false;

  buscar(termino:string){

    this.mostrarSugerencias = false;
    this.termino = termino;
    if(this.termino==''){
      this.paises=[];
      return;
    }
    this.hayError=false;
    this.paisService.buscarPais(this.termino)
    .subscribe(
    (paises )=>{
      console.log(paises);
      this.paises = paises;
      },
      (error) =>{
        this.hayError =true;
        this.paises = [];
      }
    );
  }


  filtradoHijo(termino:string){
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      paises =>{
        this.paisesSugeridos = paises;
        console.log(this.paisesSugeridos)
      }
    );
  }

}
