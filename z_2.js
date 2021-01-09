function calcSum(val){
    let resultSum = 0;
    let errorOperation = false;
    if (validatorNumberErr(val)){
        errorOperation = true;
    }
    if (!errorOperation) resultSum += val;
    function toString(){return resultSum}
    function calc(val){
        if (validatorNumberErr(val)){
            errorOperation = true;
        }
        if (!errorOperation) resultSum += val;
        return calc;
    }

    calc.toString = function(){return resultSum};
    calc.valueOf = function(){return resultSum};
    return calc;

    function validatorNumberErr(num){
        if (!isFinite(num) || typeof num != 'number' || isNaN(num)){
            return true;
        }
        return false;
    }
}