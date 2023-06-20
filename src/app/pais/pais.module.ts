import { FormsModule } from '@angular/forms';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    PaisInputComponent,
    PaisTablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
