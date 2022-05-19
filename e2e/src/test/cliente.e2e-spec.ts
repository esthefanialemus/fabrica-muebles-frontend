import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/Cliente/Cliente.po';

describe('workspace-project Cliente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let Cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        Cliente = new ClientePage();
    });

    it('Deberia crear Cliente', () => {
        const NOMBRE_Cliente = 'Esthefania';
        const APELLIDO_Cliente = 'Lemus';
        const iDENTIFICACION_Cliente = '1094972643';
        const EMAIL_Cliente = 'e@gmail.com';

        page.navigateTo();
        navBar.clickBotonClientes();
        Cliente.clickBotonCrearClientes();
        Cliente.ingresarNombre(NOMBRE_Cliente);
        Cliente.ingresarApellido(APELLIDO_Cliente);
        Cliente.ingresarIdentificacion(iDENTIFICACION_Cliente);
        Cliente.ingresarEmail(EMAIL_Cliente);


        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar Clientes', () => {
        page.navigateTo();
        navBar.clickBotonClientes();
        Cliente.clickBotonListarClientes();

        expect(0).toBe(Cliente.contarClientes());
    });
});
