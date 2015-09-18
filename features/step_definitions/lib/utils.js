/**
 * Created by kev on 23/08/15.
 */

var Utils = function(){
};

Utils.prototype.get = function(sut, url, callback) {
    return sut.browser.get(url);
};

Utils.prototype.findByModel = function(sut, item, callback) {
    sut.browser.findElement(sut.by.model(item)).then(function(result) {
        callback(result);
    });
};

Utils.prototype.findByBinding = function(sut, item, callback) {
    sut.browser.findElement(sut.by.binding(item)).then(function(result) {
        callback(result);
    });
};

Utils.prototype.isLinkPresent = function(sut, find, callback) {
    sut.browser.isElementPresent(sut.by.linkText(find)).then(function(result) {
        callback(result);
    });
};

Utils.prototype.isElementPresentByClass = function(sut, find, callback) {
    sut.browser.isElementPresent(sut.by.css('.'+find)).then(function(result) {
        callback(result);
    });
};

Utils.prototype.getElementByClass = function(sut, find, callback) {
    sut.browser.findElement(sut.by.css('.'+find)).then(function(result) {
        callback(result);
    });
};

Utils.prototype.getElementsByClass = function(sut, find, callback) {
    sut.browser.findElements(sut.by.css('.'+find)).then(function(result) {
        callback(result);
    });
};

module.exports = Utils;