//importamos el Life Cicle Hook OnInit de la biblioteca ppal
import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../_services/mensajero.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //se le inyecta el servicio al constructor
  constructor(private mensajeroService:MensajeroService) {

  }

  ngOnInit() {
    //aca se podria elegir que menu inicia por defecto
    //por ej:
    //this.seleccionarMenu(1);
  }
  
  //este metodo es el encargado de crear el menu con los elementos que deseamos
  //se puede hacer mucho mejor y elegante
  seleccionarMenu (i: number){
    switch (i) {
      case 0:
      //deep copy de objetos, se puede hacer mucho mejor
      //mandando la funcionalidad directamente a la clase
      this.mensajeroService.menuActivo = Object.assign([], this.mensajeroService.menu0);
      break;

      case 1:
      this.mensajeroService.menuActivo = Object.assign([], this.mensajeroService.menu1);
      break;

      case 2:
      this.mensajeroService.menuActivo = Object.assign([], this.mensajeroService.menu2);
      break;

      case 3:
      this.mensajeroService.menuActivo = Object.assign([], this.mensajeroService.menu3);
      break;
    }
  }

  //metodo para darle funcionalidad al menu seleccion de perfil de usuario (seleccion de edificio)
  //esto hay que reemplazarlo por lo que vaya a activar el perfil en el sistema, una sesion de usuario en el browser, cookie, o lo que sea
  seleccionarPerfil(i: number){
    switch (i) {
      case 1:
      this.mensajeroService.perfilActivo = "Nivel de perfil 1";
      console.log("elige 1");
      break;

      case 2:
      this.mensajeroService.perfilActivo = "Nivel de perfil 2";
      console.log("elige 2");
      break;

      case 3:
      this.mensajeroService.perfilActivo = "Nivel de perfil 3";
      console.log("elige 3");
      break;
    }
  }
}
