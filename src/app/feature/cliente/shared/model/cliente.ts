export class Cliente{
    id: number;
    nombre: string;
    apellido: string;
    identificacion: string;
    email: string;


    constructor(  nombre: string,apellido: string,identificacion: string,email: string, id?:number){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.identificacion=identificacion;
        this.email=email;

    }


}
