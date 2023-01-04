import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from '../app.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';
import { ContactoComponent } from '../componentes/contacto/contacto.component';
import { TecnologiasComponent } from '../componentes/tecnologias/tecnologias.component';

const routes: Routes = [
  {path: 'Inicio', component: EncabezadoComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Tecnologías-Dominadas', component: TecnologiasComponent},
  {path: 'Contacto', component: ContactoComponent},  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModuleTsModule { }
