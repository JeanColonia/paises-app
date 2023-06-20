import { Capital } from '../../interfaces/capita.interface';
import { Country } from './../../interfaces/pais.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paisesTabla:Country[] =[]
    constructor() { }

  ngOnInit(): void {

    console.log(this.paisesTabla)
  }

}
