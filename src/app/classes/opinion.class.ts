export class Opinion {
    nombre:string;
    apellido:string;
    pais:string;
    opinion:string;
    calificacion:number;
    visibilidad:boolean;
    constructor(nombre:string="",apellido:string="",pais:string="",opinion:string="",calificacion:number=5, visibilidad:boolean=false){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
        this.opinion=opinion;
        this.calificacion=calificacion;
        this.visibilidad=visibilidad;
    }

}