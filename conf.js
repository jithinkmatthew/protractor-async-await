var AllureReporter = require('jasmine-allure-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // To use async/await.
    SELENIUM_PROMISE_MANAGER: false,

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },

    specs: [

        /** un-comment enable below to run the script (without pom) */
        './src/tests/demopage.login.spec.js',
        /** un-comment enable below to run the script (Approach 1) */
        //'./src/tests/demopage.ap1.spec.js',
        /** un-comment enable below to run the script (Approach 2) */
        //'./src/tests/demopage.ap1.spec.js'
    ],
    
    capabilities: {
        browserName: 'chrome',
        
    },

    onPrepare: function () {

        //allure report
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        /* |-> It will take screenshot after each Jasmine function 'it'
         * |-> Take screenshot on failure
         */        
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        
    }

};