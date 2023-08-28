import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.scss'],
})
export class EncabezadosComponent  implements OnInit {

  @Input() titulo= '';
  constructor() { }

  ngOnInit() {}

}
