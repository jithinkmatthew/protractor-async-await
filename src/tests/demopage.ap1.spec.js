'use strict'

var loginPg = require('../pages/login/demopage.ap1.pom');

/**
 * If below credential are not working, open the below link
 * and enter email id. You will get access details
 * http://demo.guru99.com/
 */

describe('Guru99 Demo Login Page', function () {

    it('should log into guru99 demo home page', async function () {

        browser.waitForAngularEnabled(false);
        await browser.get("http://demo.guru99.com/v4/");
        await loginPg.loginToDemoApp('mngr117215','EsUdurU');

    });

});
