import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadosComponent } from './encabezados/encabezados.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [EncabezadosComponent, FooterComponent],
  exports: [EncabezadosComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
