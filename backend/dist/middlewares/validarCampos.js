"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(403).send({
            errors: err.array()
        });
    }
};
exports.validarCampos = validarCampos;
//# sourceMappingURL=validarCampos.js.map