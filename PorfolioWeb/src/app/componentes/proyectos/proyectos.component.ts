import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projectList:any;
  tecnologyList:any;
  constructor(private datosPorfolio:PorfolioService ) {
  
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.projectList = data.project;
    });
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.tecnologyList = data.tecnology;
    });
  }
}