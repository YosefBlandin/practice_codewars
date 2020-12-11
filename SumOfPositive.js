let numNegative = 0;
let emptyArray = [];
function positiveSum(arr) {
    let result= [];
    let pushed = e => result.push(e)
    arr.filter(e => e >= numNegative ? pushed(e): 0)
    result = result == false ? 0: result.reduce((a, c) => a + c);
    return result
}


positiveSum([5,5,100, 100])