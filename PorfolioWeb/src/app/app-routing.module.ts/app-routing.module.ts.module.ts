import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from '../app.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';
import { ContactoComponent } from '../componentes/contacto/contacto.component';
import { TecnologiasComponent } from '../componentes/tecnologias/tecnologias.component';
import { Pagina404Component } from '../componentes/pagina404/pagina404.component';

const routes: Routes = [
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: EncabezadoComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Tecnologías-Dominadas', component: TecnologiasComponent},
  {path: 'Contacto', component: ContactoComponent},  
  {path: '**', component: Pagina404Component},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModuleTsModule { }
