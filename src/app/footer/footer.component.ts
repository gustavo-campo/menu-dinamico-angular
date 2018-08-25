//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { }

  ngOnInit() {
  }

  lPerfilActivo(): string {
  	return this.mensajeroService.perfilActivo;
  }

}
