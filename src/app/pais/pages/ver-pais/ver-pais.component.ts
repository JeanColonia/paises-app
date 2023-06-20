import { Country } from './../../interfaces/pais.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap,tap} from 'rxjs/operators';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  pais!:Country;
  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {

this.activatedRoute.params
.pipe(
  switchMap(({id})=> this.paisService.buscarPaisPorCodigo(id)),
  tap(
    console.log
  )
)
.subscribe(
  res =>{
    console.log(res);
    this.pais = res[0];
  }
);

  }

}
