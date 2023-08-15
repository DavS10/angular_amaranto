import { Component } from '@angular/core';
import { ave } from '../classes/ave.class';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  aves:ave[] = [
    {
      id: 0,
      tipo: "Castellana",
      caracteristicas:"Plumaje negro y huevos blancos.<ul><li>Raza elegante, altiva, ligera y vigorosa.<li>Buena ponedora.</li></li><li>La gallina Castellana es una raza autóctona española.</li></ul>",
      imagen:"../../assets/aves/gallina-castellana.jpg",
      costo:650.00,
      disponibilidad:true

    },
    {
      id: 1,
      tipo: "Araucana",
      caracteristicas:"La gallina de los huevos azules.<ul><li>Es popular entre los avicultores porque pone los huevos de color azul turquesa, tanto por fuera como por dentro del cascarón.</li><li>Raza americana de talla grande. Gallina recula, es decir, no tiene cola</li><li>Hay distintas variedades: con barba, sin barba, con aretes y sin ellos</li></ul>",
      imagen:"../../assets/aves/araucana-dorada.jpg",
      costo:725.00,
      disponibilidad:true

    },
    {
      id: 2,
      tipo: "Brahma",
      caracteristicas:"Destaca por su gran tamaño.<ul><li>Tarsos emplumados y cresta en forma de guisante.</li><li>Es una raza familiar y tranquila.</li><li>Huevos de gran tamaño.</li></ul>",
      imagen:"../../assets/aves/gallina-brahma.jpg",
      costo:1090.00,
      disponibilidad:true

    },
    {
      id: 3,
      tipo: "Cream Legbar",
      caracteristicas:"Huevos verde azulado.<ul><li>Buena ponedora.</li><li>La gallina Cream Legbar se denomina así porque sus plumas son de color crema.</li></ul>",
      imagen:"../../assets/aves/cream-legnar-gallinas.jpg",
      costo:900.00,
      disponibilidad:false

    },
    {
      id: 4,
      tipo: "Gallo campero",
      caracteristicas:"Diferentes variedades.<ul><li>Varios colores/tipos disponibles/razas.</li></ul>",
      imagen:"../../assets/aves/gallo-campero.jpg",
      costo:370.00,
      disponibilidad:false

    },
    {
      id:5,
      tipo: "Marans",
      caracteristicas:"Pone huevos color marrón rojizo.<ul><li>De origen francés, es una de las razas de gallina más completas, pues es rústica pero calmada.</li><li>Es buena ponedora, su carne es de calidad y el color del huevo es único.</li><li>Gallina grande y ancha. Tarsos emplumados.</li></ul>",
      imagen:"../../assets/aves/marans-huevos-marrones.jpg",
      costo:725.00,
      disponibilidad:false

    },
    {
      id: 6,
      tipo: "Olive egg",
      caracteristicas:"Huevos verde oliva.<ul><li>Esta variedad se obtiene del cruce entre Marans y Araucana.</li><li>El plumaje de la gallina puede ser claro u oscuro.</li></ul>",
      imagen:"../../assets/aves/olive-egg-azul.jpg",
      costo:650.00,
      disponibilidad:true

    },
  ];
  constructor(
    public dialogDetalles: MatDialog
  ){}
  verDetalles(ave1:ave){
    console.log(ave1);
    this.dialogDetalles.open(DetallesComponent,{
      data:ave1
    })
    .afterClosed();
  }
}
