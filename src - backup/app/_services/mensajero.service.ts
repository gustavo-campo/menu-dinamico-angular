import { Injectable } from '@angular/core';
//importamos la clase MenuItems
import { MenuItems } from '../_customClasses/menu-items';

@Injectable({
  providedIn: 'root'
})

export class MensajeroService {

  constructor() { }

  //grupo de variables que controlan la visibilidad de los componentes
  //se puede hacer muchisimo mejor y mas elegante
  varDummy1: boolean = false;
  varDummy2: boolean = false;
  varDummy3: boolean = false;
  varDummy4: boolean = false;
  varDummy5: boolean = false;
  varDummy6: boolean = false;
  varDummy7: boolean = false;
  varDummy8: boolean = false;
  //variable con el nombre del perfil activo de usuario
  perfilActivo: string = "default";

  //placeholder para el menu sidebar, por diseño puede tener hasta 5 elementos,
  //los que se muestran o no se definen por la propiedad MenuItem.visible
  //
  //a implementar a futuro: que el numero de opciones del menu pueda ser arbitrario,
  //asi como que tenga la funcionalidad acordeon.
  menuActivo: MenuItems[] = [
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false)
  ];


  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu0: MenuItems[] = [
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false)
  ];

  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu1: MenuItems[] = [
  	new MenuItems(1, false, 'http://www.google.com', 'Módulo 1', true),
  	new MenuItems(2, false, 'http://www.gmail.com', 'Módulo 2', true),
  	new MenuItems(3, false, 'http://www.twitter.com', 'Módulo 3', true)
  ];

  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu2: MenuItems[] = [
    new MenuItems(4, false, 'http://www.Clarin.com', 'Módulo 4', true),
    new MenuItems(5, false, 'http://www.Ambito.com', 'Módulo 5', true)
  ];

  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu3: MenuItems[] = [
    new MenuItems(6, false, 'http://www.yahoo.com', 'Módulo 6', true),
    new MenuItems(7, false, 'http://www.github.com', 'Módulo 7', true),
    new MenuItems(8, false, 'http://www.youtube.com', 'Módulo 8', true)
  ];

  //metodo para actualizar la visibilidad de los componentes
  //se puede hacer mejor, como llevando la funcionalidad a la clase directamente
  toggleVisibility(i) {
      switch (i) {
      case 0:
      //implementacion rapida de una confirmacion de salida
      //a implementar a futuro: hacerlo con un modal
        if (confirm("Esta seguro de salir?")) {
          this.varDummy1 = false;
          this.varDummy2 = false;
          this.varDummy3 = false;
          this.varDummy4 = false;
          this.varDummy5 = false;
          this.varDummy6 = false;
          this.varDummy7 = false;
          this.varDummy8 = false;
          this.menu1[0].active= false;
          this.menu1[1].active= false;
          this.menu1[2].active= false;
          this.menu2[0].active= false;
          this.menu2[1].active= false;
          this.menu3[0].active= false;
          this.menu3[1].active= false;
          this.menu3[2].active= false;
        }
      break;
      //activo el componente 1 y actualizo el item del menu como activo
      case 1:
        this.varDummy1 = true;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= true;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;
      case 2:
      //activo el componente 2 y actualizo el item del menu como activo
        this.varDummy1 = false;
        this.varDummy2 = true;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= true;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;      
      case 3:
      //activo el componente 3 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = true;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= true;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;
      case 4:
      //activo el componente 4 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = true;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= true;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;      
      case 5:
      //activo el componente 5 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = true;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= true;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;
      case 6:
      //activo el componente 6 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = true;
        this.varDummy7 = false;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= true;
        this.menu3[1].active= false;
        this.menu3[2].active= false;
      break;
      case 7:
      //activo el componente 7 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = true;
        this.varDummy8 = false;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= true;
        this.menu3[2].active= false;
      break;
      case 8:
      //activo el componente 8 y actualizo el item del menu como activo
      	this.varDummy1 = false;
        this.varDummy2 = false;
        this.varDummy3 = false;
        this.varDummy4 = false;
        this.varDummy5 = false;
        this.varDummy6 = false;
        this.varDummy7 = false;
        this.varDummy8 = true;
        this.menu1[0].active= false;
        this.menu1[1].active= false;
        this.menu1[2].active= false;
        this.menu2[0].active= false;
        this.menu2[1].active= false;
        this.menu3[0].active= false;
        this.menu3[1].active= false;
        this.menu3[2].active= true;
      break;
    }
  }

}
