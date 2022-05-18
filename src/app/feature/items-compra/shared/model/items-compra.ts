export class ItemsCompra{
    id: number;
    cantidad: number;
    idCompra: number;
    idProducto: number;


    constructor( cantidad: number, idCompra: number, idProducto: number, id?:number){
        this.id=id;
        this.cantidad=cantidad;
        this.idCompra=idCompra;
        this.idProducto=idProducto;

    }


}
