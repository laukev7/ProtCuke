/**
 * Created by kev on 24/08/15.
 */

var utils = require('./utils');

var Wanderlust = function(world) {
    this.world = world;
    this.url = 'http://mywanderlust.co/';
};

Wanderlust.prototype.go = function(callback) {
    //return this.world.browser.get(this.url);
};

Wanderlust.prototype.search = function(callback) {
    /*
    utils.findByModel(this.world, "chosenPlace", function(result) {
        result.sendKeys(destination).then(callback);
    })
    */
    //return this.world.browser.findElement(this.by.model(item));
    return Promise.resolve(1);
};

Wanderlust.prototype.hasSearchDropdown = function() {
    var numElements = this.world.browser.findElements(this.world.by.css(".pac-container")).length;
    console.log(numElements);
    return Promise.resolve(numElements == 1);
};

module.exports = Wanderlust;