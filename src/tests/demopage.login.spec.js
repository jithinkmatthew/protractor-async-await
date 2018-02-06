'use strict';
/**
 * If below credential are not working, open the below link
 * and enter email id. You will get access details
 */

//Guru99 Bank - Login page test script without pom
describe('Guru99 Bank Login Page', function() {
 
    it('should log into guru99 bank home page', async function(){
 
        browser.waitForAngularEnabled(false);
        await browser.get("http://demo.guru99.com/v4/");
 
        await element(by.css("input[name='uid']")).sendKeys("mngr117215");
        await element(by.css("input[name='password']")).sendKeys("EsUdurU");
        await element(by.css("input[name='btnLogin']")).click();
 
    });
 
});