class MathUtilities {


    add(baseValue, valueToAdd){
        let num = baseValue + valueToAdd;
        return num;
    }

    subtract(baseValue, valueToAdd){
        let difference = baseValue - valueToAdd;
        return difference;
    }

    divide(baseValue, valueToAdd){
        let quotient = baseValue / valueToAdd;
        return quotient;
    }

    multiply(baseValue, valueToAdd){
        let product = baseValue * valueToAdd;
        return product;
    }
}

module.exports = MathUtilities;