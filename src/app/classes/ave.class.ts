export class ave {
    id:number;
    tipo:string;
    caracteristicas:string;
    imagen:string;
    costo:number;
    disponibilidad:boolean;
    constructor(id:number=0,tipo:string='',caracteristicas:string='',imagen:string='',costo:number=0,disponibilidad:boolean=false){
        this.id=id;
        this.tipo=tipo;
        this.caracteristicas=caracteristicas;
        this.imagen=imagen;
        this.costo=costo;
        this.disponibilidad=disponibilidad;
    }

}