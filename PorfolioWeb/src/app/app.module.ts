import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MisProyectosComponent } from './componentes/mis-proyectos/mis-proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MisProyectosComponent,
    ContactoComponent,
    HeadComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
