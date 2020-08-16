verifyCondition = (number) => { if (number & 1) return 1; else return 2 };

function calculateModule10(array, oposite = false) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        let sum = parseInt(array[index]) * verifyCondition(oposite ? index + 1 : index);
        sum <= 9 ? result += sum : result += (sum - 9);
    }
    result = result % 10 == 0 ? 0 : 10 - (result % 10);
    return result;
}

function calculateModule11(array) {
    let result = 0;
    let count = 1;
    for (let index = 0; index < array.length; index++) {
        count == 9 ? count = 2 : count++;
        let sum = parseInt(array[index]) * count;
        result += sum;
    }
    result = 11 - (result % 11);
    [0, 1, 10].includes(result) ? result = 1 : null;
    return result;
}

formatValue = (value) => { return parseInt(value, 10) };


module.exports = {calculateModule10,calculateModule11,formatValue};