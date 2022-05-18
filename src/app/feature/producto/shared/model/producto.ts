export class Producto {
    id: number;
    valor: number;
    numeroPuesto: string;
    tipoComedor: string;

    constructor(numeroPuesto:string, tipoComedor:string, valor: number, id?: number) {
        this.id = id;
        this.numeroPuesto=numeroPuesto;
        this.tipoComedor=tipoComedor;
        this.valor=valor;
    }
}
