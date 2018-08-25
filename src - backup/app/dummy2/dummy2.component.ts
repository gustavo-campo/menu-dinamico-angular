//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.css']
})
export class Dummy2Component implements OnInit {

  //en este ejemplo tomo del servicio mensajero el estado de la variable perfilActivo y lo almaceno al inicio del componente, para respetar que no se puede cambiar de permisos una vez abierto el fomulario
  pActivo: string = this.mensajeroService.perfilActivo;

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { }

  ngOnInit() { }

  salir() {
  	this.mensajeroService.toggleVisibility(0);
  }

}
