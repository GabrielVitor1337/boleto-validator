const { calculateModule10, calculateModule11, formatValue } = require('../utils/utils');

function firstType(barcode) {
    let data = {};
    data.value = formatValue(barcode.substr(37, 10));
    data.expirateDate = formatExpirateDate(parseInt(barcode.substr(33, 4)));
    let fieldOne = barcode.split("").slice(0, 9);
    let fieldTwo = barcode.split("").slice(10, 20);
    let fieldThree = barcode.split("").slice(21, 31);
    if (calculateModule10(fieldOne) !== parseInt(barcode.substr(9, 1))) { return { digitableLineValid: false } };
    if (calculateModule10(fieldTwo, true) !== parseInt(barcode.substr(20, 1))) { return { digitableLineValid: false } };
    if (calculateModule10(fieldThree, true) !== parseInt(barcode.substr(31, 1))) { return { digitableLineValid: false } };
    data.barcode = transformBarcode(barcode);
    let barCodeWithoutCV = data.barcode.substr(0, 4) + data.barcode.substr(5, 40);
    if (calculateModule11(barCodeWithoutCV.split("").reverse()) !== parseInt(barcode.substr(32, 1))) { return { digitableLineValid: false } };
    data.digitableLineValid = true;
    return data;
}

function transformBarcode(number) {
    return number.substr(0, 4) + number.substr(32, 15)
        + number.substr(4, 5) + number.substr(10, 6) +
        number.substr(16, 4) + number.substr(21, 10);
}

function formatExpirateDate(fator) {
    let date = new Date('10/07/1997');
    date.setTime(date.getTime() + (fator * 24 * 60 * 60 * 1000));
    return ("0" + (date.getDate())).slice(-2) + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
}

module.exports = firstType;