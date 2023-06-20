import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  @Input() inputPlaceholder:string='';

  @Output() termino : EventEmitter<string> = new EventEmitter();
  @Output() debounceEvent: EventEmitter<string> = new EventEmitter();

  terminoInput:string='';
    constructor() { }


    debouncer:Subject<string> =  new Subject();

  ngOnInit(): void {

    this.debouncer
    .pipe( debounceTime(300))
    .subscribe(
      valor =>{
        this.debounceEvent.emit(valor);
        console.log("DEBOUNCER", valor);
      }
    );
  }


  buscar(){

   this.termino.emit(this.terminoInput);


  }

  teclaPresionada(){
    this.debouncer.next(this.terminoInput);
  }

}
