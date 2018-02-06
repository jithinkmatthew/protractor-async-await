'use strict'

var loginPg = require('../pages/login/demopage.ap2.pom');

describe('Guru99 Demo Login Page', function () {

    it('should log into guru99 demo home page', async function () {

        browser.waitForAngularEnabled(false);
        await browser.get("http://demo.guru99.com/v4/");
        await loginPg.loginToDemoApp('mngr117215','EsUdurU');

    });

});