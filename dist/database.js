"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIanaCodeByIso = exports.getIanaCode = exports.getResults = void 0;
var cities = require('../data/citymap.json');
function getResults(name) {
    var _results = cities.cities.filter(function (__c) { return __c.city.toLowerCase() === name.toLowerCase(); });
    if (!_results || !_results.length) {
        throw new Error('no city found in db, try a more populated city nearby');
    }
    return _results;
}
exports.getResults = getResults;
function getIanaCode(name, country) {
    var _result = cities.cities.find(function (__c) { return __c.city.toLowerCase() === name.toLowerCase() && __c.country.toLowerCase() === country.toLowerCase(); });
    if (!_result) {
        throw new Error("No iana code found for " + name + ", " + country);
    }
    return _result;
}
exports.getIanaCode = getIanaCode;
function getIanaCodeByIso(name, iso_code) {
    var _result = cities.cities.find(function (__c) { return __c.city.toLowerCase() === name.toLowerCase() && __c.iso2 === iso_code; });
    if (!_result) {
        throw new Error("No iana code found for " + name + ", " + iso_code);
    }
    return _result;
}
exports.getIanaCodeByIso = getIanaCodeByIso;
