function deduct(a,b)
{
	let value 1 = a;
	let value 2 = b;
	let result = value 1 - value 2;
	return result;
}

function sum(a, b) {
    let value1 = a;
    let value2 = b;
<<<<<<< HEAD
    let result = value1 + value2;
=======
    let result = valuea + valueb;
>>>>>>> a96d5482cca446a18f54646dbded83432a12a0f8
    return result;
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return a;
    }
}

function factorial(a)
{    
    let result = a;
    for(let i = a; i > 0; i--)
    {
        result = result * i - 1;   
    }        

    return result;                        
}

/*  arraySum - calculates the sum of two arrays by summing each element.
    The sum of arrays [1,2] and [3, 4] would be (1+3) + (2+4) = 10.
    The input arrays need to be of same length */
function arraySum(a, b)
{   
    let result = 0;

    for(let i = 1; i < a.length; i++)
    {        
        result = a[i] + b[i];        
    }

    return result;
}

console.log("deduction: " + deduct(30, 20));
console.log("sum: " + sum(30, 20));
console.log("max: " + max(10, 13));
console.log("factorial: " + factorial(3));

const array1 = [1,2,3,4];
const array2 = [10,10,20,20];
console.log("arraySum: " + arraySum(array1, array2));