import { Injectable } from '@angular/core';
//importamos la clase MenuItems
import { MenuItems } from '../_customClasses/menu-items';

//http service
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MensajeroService {

  constructor(private httpService: HttpClient) { }

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

  menu0: MenuItems[] = [
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false),
    new MenuItems(0, false, 'placeholder', 'placeholder', false)
  ];

  menuCompleto: MenuItems[] = [];
  menu1: MenuItems[];
  menu2: MenuItems[];
  menu3: MenuItems[];



  arrTest: string [];
  tempMenuItem: MenuItems;
  
  traerJSON () {
    this.httpService.get('../assets/menu_items_list.json').subscribe(
      data => {
        this.arrTest = data as string [];   // FILL THE ARRAY WITH DATA.
        for (var i = 0; i < this.arrTest.length; i++) {
          this.tempMenuItem = new MenuItems(
                                            this.arrTest[i]["id"],
                                            false,
                                            this.arrTest[i]["url"],
                                            this.arrTest[i]["name"],
                                            this.arrTest[i]["visible"]
                                            );
          //console.log(this.tempMenuItem);
          this.menuCompleto.push(this.tempMenuItem);
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    console.log(this.menuCompleto);
  }



}