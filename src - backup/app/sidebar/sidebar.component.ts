//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos la clase MenuItems
import { MenuItems } from '../_customClasses/menu-items';
//importamos el servicio mensajero
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { }
  
  ngOnInit() { }

  //metodo local que expone al servicio
  //evita error en produccion
  lToggleVisibility(i: number) {
	  this.mensajeroService.toggleVisibility(i);
  }

  lMenuActivo(): MenuItems[] { return this.mensajeroService.menuActivo; }
  
}
