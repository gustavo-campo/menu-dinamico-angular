//imports de sistema
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import del bootstrap para angular
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

//componentes de la navegacion y vista principal
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainViewComponent } from './main-view/main-view.component';

//todos los componentes de la aplicacion
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { Dummy3Component } from './dummy3/dummy3.component';
import { Dummy4Component } from './dummy4/dummy4.component';
import { Dummy5Component } from './dummy5/dummy5.component';
import { Dummy6Component } from './dummy6/dummy6.component';
import { Dummy7Component } from './dummy7/dummy7.component';
import { Dummy8Component } from './dummy8/dummy8.component';

//import del servicio
import { MensajeroService } from './_services/mensajero.service';

//se declaran los componentes, se importan los modulos (por ej bootstrap) y se registran como providers a los servicios.
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    MainViewComponent,
    Dummy1Component,
    Dummy2Component,
    Dummy3Component,
    Dummy4Component,
    Dummy5Component,
    Dummy6Component,
    Dummy7Component,
    Dummy8Component
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  //los servicios se declaran como providers
  providers: [MensajeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
