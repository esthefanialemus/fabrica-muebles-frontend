import { by, element } from 'protractor';

export class ClientePage {
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkListarClientes = element(by.id('linkListarCliente'));
    private inputNombreCliente = element(by.id('NombreCliente'));
    private inputApellidoCliente = element(by.id('ApellidoCliente'));
    private inputIdentificacionCliente = element(by.id('IdentificacionCliente'));
    private inputEmail = element(by.id('EmailCliente'));
    private listaClientes = element.all(by.css('ul.Clientes li'));

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonListarClientes() {
        await this.linkListarClientes.click();
    }

    async ingresarNombre(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }
    async ingresarApellido(apellidoCliente) {
      await this.inputApellidoCliente.sendKeys(apellidoCliente);
    }

    async ingresarEmail(emailCliente) {
      await this.inputEmail.sendKeys(emailCliente);
    }

    async ingresarIdentificacion(identificacionCliente) {
      await this.inputIdentificacionCliente.sendKeys(identificacionCliente);
    }




    async contarClientes() {
        return this.listaClientes.count();
    }
}
