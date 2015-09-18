var pc = require('protractor-cucumber');
var Wanderlust = require('./lib/Wanderlust');
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var myStepDefinitionsWrapper = function () {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000, 'desiredCapabilities': ['firefox', 'chrome'] };
    this.World = pc.world(seleniumAddress, options);
    var expect = chai.expect;

    var wanderlust;

    var callbackWithTimeout = function(timeout) {
        setTimeout(callback, timeout);
    };

    this.Before(function(callback) {
        console.log(process.version);
        wanderlust = new Wanderlust(this);
        callback();
    });

    this.After(function(callback) {
        //this.quit(callback);
    });

    this.Given(/^I am on the Wanderlust website$/, function() {
        return this.browser.get("http://mywanderlust.co/");
    });

    this.When(/^I search for city "([^"]*)"$/, function(destination) {
        return wanderlust.search(destination);
    });

    this.Then(/^I should see a results dropdown$/, function() {
        return expect(wanderlust.hasSearchDropdown()).to.eventually.be.true;
    });

    this.Then(/^I should get (\d+) results$/, function(num, callback) {
        utils.getElementsByClass(this, "pac-item", function(result) {
            result.length.should.equal(num);
            setTimeout(callback, 1000);
        })
    });
};
module.exports = myStepDefinitionsWrapper;