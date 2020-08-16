const express = require('express');
const router = express.Router();
const bankModel = require('../models/bankModel');
const collectionModel = require('../models/collectionModel');
router.get('/:barcode', function (req, res, next) {
    const barcode = req.params.barcode;
    if (isNaN(barcode) || (![47, 48].includes(barcode.length))) return res.send({ error: "Boleto Inválido." });
    let type = barcode.startsWith(8) ? "Concessionárias" : "Banco";
    type == "Banco" ? result = bankModel(barcode.toString()) : result = collectionModel(barcode.toString());
    return res.send({ result });
});

module.exports = router;