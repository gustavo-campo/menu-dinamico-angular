//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
//importamos el servicio mensajero
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) { }

  ngOnInit() {
  }

  visibleDummy1(): boolean { return this.mensajeroService.varDummy1; }
  visibleDummy2(): boolean { return this.mensajeroService.varDummy2; }
  visibleDummy3(): boolean { return this.mensajeroService.varDummy3; }
  visibleDummy4(): boolean { return this.mensajeroService.varDummy4; }
  visibleDummy5(): boolean { return this.mensajeroService.varDummy5; }
  visibleDummy6(): boolean { return this.mensajeroService.varDummy6; }
  visibleDummy7(): boolean { return this.mensajeroService.varDummy7; }
  visibleDummy8(): boolean { return this.mensajeroService.varDummy8; }

}
