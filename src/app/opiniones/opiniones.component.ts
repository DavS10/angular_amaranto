import { Component } from '@angular/core';
import { opinion } from '../interfaces/opinion.interface';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent {
  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  opinion: string = '';
  calificacion: number = 5;
  visibilidad: boolean = false;

  opiniones:opinion[] = [];

  guardar(){
    let registro_opinion = {
       nombre: this.nombre,
       apellido: this.apellido,
       pais: this.pais,
       opinion: this.opinion,
       calificacion: this.calificacion,
       visibilidad:this.visibilidad
    }
    this.opiniones.push(registro_opinion);
    this.nombre='';
    this.apellido='';
    this.pais='';
    this.opinion='';
    this.calificacion=5;
    this.visibilidad=false;

    console.log(this.opiniones);
  }
}
