import { Component } from '@angular/core';
//import de la clase para el objeto menuItems
import { MenuItems } from './_customClasses/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagina principal';
}