

import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginNaideth extends Page {
    /**
     * define selectors using getter methods
     */
    get txtUsuarioNaideth() {
        return $('#ds_login');
    }

    get txtPasswordNaideth() {
        return $('#ds_password');
    }

    get btnLogin() {
        return $('#btnEnter_full');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginNaideth (username, password) {
        await browser.takeScreenshot();
        await this.txtUsuarioNaideth.setValue(username);
        await this.txtPasswordNaideth.setValue(password);

        await browser.takeScreenshot();
        await this.btnLogin.click();

        await browser.pause(5000);
        await browser.takeScreenshot();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open(url) {
        return super.open(url);
    }
}

export default new LoginNaideth();
