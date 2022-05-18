export class Compra{
    id: number;
    idCliente: number;
    total: number;
    fechaCompra: string;
    fechaDespacho: string;
    fechaEntrega: string;


    constructor(  idCliente: number,total: number,fechaCompra: any,fechaDespacho: any,fechaEntrega: any, id?:number){
        this.id=id;
        this.idCliente=idCliente;
        this.total=total;
        this.fechaCompra=fechaCompra;
        this.fechaDespacho=fechaDespacho;
        this.fechaEntrega=fechaEntrega;
    }


}
