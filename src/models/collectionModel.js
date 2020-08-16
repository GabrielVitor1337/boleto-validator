const { calculateModule10, calculateModule11, formatValue } = require('../utils/utils');

function secondType(barcode) {
    let data = {};
    let count = 0;
    if (calculateModule10(barcode.substr(0, 11)) !== parseInt(barcode.substr(11, 1))) { return { digitableLineValid: false } };
    if (calculateModule10(barcode.substr(12, 11)) !== parseInt(barcode.substr(23, 1))) { return { digitableLineValid: false } };
    if (calculateModule10(barcode.substr(24, 11)) !== parseInt(barcode.substr(35, 1))) { return { digitableLineValid: false } };
    if (calculateModule10(barcode.substr(36, 11)) !== parseInt(barcode.substr(47, 1))) { return { digitableLineValid: false } };
    data.barcode = transformBarcode(barcode);
    let barCodeWithoutCV = data.barcode.substr(0, 3) + data.barcode.substr(4, 40);
    let compare = ["6", "7"].includes(data.barcode.substr(2, 1)) ? calculateModule10(barCodeWithoutCV.split("")) : calculateModule11(barCodeWithoutCV.split("").reverse());
    if (compare !== parseInt(barcode.substr(3, 1))) { return { digitableLineValid: false } }
    data.digitableLineValid = true;
    data.value = formatValue(data.barcode.substr(4, 11));
    validDate(formatExpirateDate(data.barcode.substr(20, 8))) ? data.expirateDate = formatExpirateDate(data.barcode.substr(20, 8)) : null;
    return data;
}
function transformBarcode(barcode) {
    return barcode.substr(0, 11) + barcode.substr(12, 11) +
        barcode.substr(24, 11) + barcode.substr(36, 11);
}

function formatExpirateDate(date) {
    let dateFormat = date.split("").reverse().join("");
    return `${dateFormat.substr(0, 2)}-${dateFormat.substr(2, 2)}-${dateFormat.substr(4, 4)}`
}

validDate = (date) => { new Date(date) ? date : false }

module.exports = secondType;
