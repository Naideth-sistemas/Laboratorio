

import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BusquedaNaideth extends Page {
    /**
     * define selectors using getter methods
     */
    get txtOrigenNaideth() {
        return $('#origen_PACKETE');
    }

    get txtDestinoNaideth() {
        return $('#destino_PACKETE');
    }

    get txtFechaNaideth() {
        return $('#dt_from_PACKETE');
    }

    get cmbHabitacionesNaideth() {
        return $('#NumHab_PACKETE_div');
    }

    get cmbAdultoNaideth() {
        return $('#am_adult_h_PACKETE_1');
    }

    get cmbAdultoEdad1Naideth() {
        return $('#age_h_PACKETE_1_ad1');
    }

    get cmbAdultoEdad2Naideth() {
        return $('#age_h_PACKETE_1_ad2');
    }
    

    get cmbNinoNaideth() {
        return $('#am_child_h_PACKETE_1');
    }

    get cmbAgeNinoNaideth() {
        return $('#age_h_PACKETE_1_ch1');
    }

    get btnAplicarHabitacion() {
        return $("//div[@id='modal_habitaciones_PACKETE']/div/div/div[2]/a[contains(text(),'Aplicar')]");
    }

    get cmbModenaNaideth() {
        return $('#id_money_PACKETE');
    }

    get txtCiudadVisitadaNaideth() {
        return $('#visit_PACKETE');
    }

    get btnBuscar() {
        return $('#btnSearch_PACKETE');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async BusquedaPaquete (strorigen, strdestino, strmessalida, strNumadulto, stredadadultoA, stredadadultoB, strNumNino, stredadNino, strMoneda, strCiudadVisitada) {
        await browser.pause(20000);
        await browser.takeScreenshot();
        await this.txtOrigenNaideth.setValue(strorigen);
        await browser.pause(6000);
        await browser.keys("\uE007");
        await this.txtDestinoNaideth.setValue(strdestino);
        await browser.pause(6000);
        await browser.keys("\uE007");
        await this.txtFechaNaideth.setValue(strmessalida);

        await this.cmbHabitacionesNaideth.click();
        await this.cmbAdultoNaideth.selectByVisibleText(strNumadulto);

        await this.cmbAdultoEdad1Naideth.selectByVisibleText(stredadadultoA);
        await this.cmbAdultoEdad2Naideth.selectByVisibleText(stredadadultoB);

        await this.cmbNinoNaideth.selectByVisibleText(strNumNino);
        await this.cmbAgeNinoNaideth.selectByVisibleText(stredadNino);

        await this.btnAplicarHabitacion.click();

        await this.cmbModenaNaideth.selectByVisibleText(strMoneda);
        await this.txtCiudadVisitadaNaideth.setValue(strCiudadVisitada);

        await browser.takeScreenshot();
        await this.btnBuscar.click();

        await browser.pause(10000);
        await browser.takeScreenshot();
    }

}

export default new BusquedaNaideth();
