"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " - " + str2;
};
exports.addStrings = addStrings;
var printFormat = function () {
    console.log();
};
exports.printFormat = printFormat;
var fetchData = function (url) { return Promise.resolve("Data from " + url); };
exports.fetchData = fetchData;
var getName = function (user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first') + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
};
exports.getName = getName;
