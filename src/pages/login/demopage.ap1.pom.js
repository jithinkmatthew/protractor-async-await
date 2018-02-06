'use strict'

async function setName(name) {
    await element(by.css("input[name='uid']")).sendKeys(name);
}

async function setPassword(pwd) {
    await element(by.css("input[name='password']")).sendKeys(pwd);
}

async function clickOnLoginBtn() {
    await element(by.css("input[name='btnLogin']")).click();
}

async function loginToDemoApp(username, password){

    browser.waitForAngularEnabled(false);
    await setName(username);
    await setPassword(password);
    await clickOnLoginBtn();
    browser.waitForAngularEnabled(true);
        
}

module.exports = {
    setName,
    setPassword,
    clickOnLoginBtn,
    loginToDemoApp
}