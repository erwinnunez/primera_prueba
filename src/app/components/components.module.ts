import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadosComponent } from './encabezados/encabezados.component';



@NgModule({
  declarations: [EncabezadosComponent],
  exports: [EncabezadosComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
