//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-dummy1',
  templateUrl: './dummy1.component.html',
  styleUrls: ['./dummy1.component.css']
})
export class Dummy1Component implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { 
  	//prueba que se ejecuto el constructor
    console.log("se ejecuto el constructor");
  }

  ngOnInit() {
    //prueba que es lo primero que se hace una vez ejecutado el constructor
  	console.log("se ejecuto el modulo1");
  }

  ngOnDestroy() {
    //lo ultimo que hace la aplicacion antes de elimarla del DOM
  	console.log("se elimino el modulo1");
  }
}
