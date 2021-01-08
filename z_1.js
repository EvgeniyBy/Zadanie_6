function calcSumFromFibonacci(from, to){
    if ((!isFinite(from) ||
     typeof from != 'number' ||
      isNaN(from)) ||
       (!isFinite(to) ||
         typeof to != 'number' ||
          isNaN(to))
        ||
        from<0 ||
        to < from
          ) {
        throw 'Неверное значение';
    }
    let resSum = 0;
    let prevN = 0;
    let currentN = 1;
    let tempN = 1;
    do{
        if (from<=prevN && currentN<=to ){
            if (prevN>resSum){
                resSum = prevN;
            }
            resSum+=currentN;
        }
        tempN = currentN;
        currentN = currentN + prevN;
        prevN = tempN;
    }
    while(currentN<=to);
    
    return resSum;
}