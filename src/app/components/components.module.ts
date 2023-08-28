import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadosComponent } from './encabezados/encabezados.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EncabezadosComponent],
  exports: [EncabezadosComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
