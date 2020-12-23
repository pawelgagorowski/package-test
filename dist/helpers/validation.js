"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = /** @class */ (function () {
    function Validation(name) {
        this.name = name;
        this.init();
    }
    Validation.prototype.init = function () {
        console.log(this.name);
        console.log("OK, inicjalizacja przebiegla poprawnie");
    };
    return Validation;
}());
exports.default = Validation;
