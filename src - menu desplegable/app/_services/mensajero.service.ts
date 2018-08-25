import { Injectable } from '@angular/core';
//importamos la clase MenuItems
import { MenuItems } from '../_customClasses/menu-items';

@Injectable({
  providedIn: 'root'
})

export class MensajeroService {

  constructor() { }

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
  	new MenuItems(1, false, '/dummy1', 'Módulo 1', true),
  	new MenuItems(2, false, '/dummy2', 'Módulo 2', true),
  	new MenuItems(3, false, '/dummy3', 'Módulo 3', true)
  ];

  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu2: MenuItems[] = [
    new MenuItems(4, false, '/dummy4', 'Módulo 4', true),
    new MenuItems(5, false, '/dummy5', 'Módulo 5', true)
  ];

  //datos hardcodeados que deberian llegar dinamicamente de una bbdd
  menu3: MenuItems[] = [
    new MenuItems(6, false, '/dummy6', 'Módulo 6', true),
    new MenuItems(7, false, '/dummy7', 'Módulo 7', true),
    new MenuItems(8, false, '/dummy8', 'Módulo 8', true)
  ];

}
