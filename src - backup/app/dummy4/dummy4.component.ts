//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-dummy4',
  templateUrl: './dummy4.component.html',
  styleUrls: ['./dummy4.component.css']
})
export class Dummy4Component implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { }

  ngOnInit() { }

}
