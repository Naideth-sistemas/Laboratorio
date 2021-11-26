import LoginPage from  '../pageobjects/login_naideth/loginNaideth.page';
import BusquedaNaideth from '../pageobjects/busqueda_naideth/busquedaNaideth.page';
import * as HelperNaideth from '../../helperNaideth/ambientes.json'
import * as SuiteBogCan from '../../helperNaideth/suiteBogCan.json'
describe('buscando paquetes naideth', () => {
    it('Paquete BOG-CUN', async () => {
        await LoginPage.open(HelperNaideth.ambientes.testing)
        await LoginPage.loginNaideth(HelperNaideth.credenciales.user, HelperNaideth.credenciales.password)

        await BusquedaNaideth.BusquedaPaquete(SuiteBogCan.DatosPrueba.origen, SuiteBogCan.DatosPrueba.destino, SuiteBogCan.DatosPrueba.MesSalida, SuiteBogCan.DatosPrueba.CantAdultos, SuiteBogCan.DatosPrueba.EdadAdultos[0], SuiteBogCan.DatosPrueba.EdadAdultos[1], SuiteBogCan.DatosPrueba.CantNinos, SuiteBogCan.DatosPrueba.EdadNinos[0], SuiteBogCan.DatosPrueba.Moneda, SuiteBogCan.DatosPrueba.CiudadVisitada)
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


