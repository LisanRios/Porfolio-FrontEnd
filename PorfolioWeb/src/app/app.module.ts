import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ProyectosComponent,
    ContactoComponent,
    TecnologiasComponent,
    Pagina404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
