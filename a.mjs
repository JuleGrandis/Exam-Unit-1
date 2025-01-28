import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply (...args) {
    let result = 1;

    for (const arg of args) {
        if (arg === Number.POSITIVE_INFINITY || arg === Number.NEGATIVE_INFINITY) {
            result *= arg;
            continue;
        }
        
        let num;
        if (typeof arg === "string") {
            num = Number(arg);
        } else {
            num = arg;
        }

        if (typeof num !== "number" || isNaN(num)) {
            return NaN;
        }

        result *= num;
    }

    return result;
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Multiply function");

// Valid inputs
tests.isEqual(multiply(1, 2), 2, "Multiplying 1 and 2, answer should be 2");
tests.isEqual(multiply(-5, 5), -25, "Multiply -5 and 5, answer should be -25");
tests.isEqual(multiply(2.5, 3.5), 8.75, "Multiplying 2.5 and 3.5, answer should be 8.75");
tests.isEqual(multiply(0, 3), 0, "Multiplying 0 and 3, answer should be 0");

// Invalid inputs
tests.isNotANumber(multiply("1", 2), 'Sum of "1" and 2 should return NaN');
tests.isNotANumber(multiply(1, null), "Sum of 1 and null should return NaN");
tests.isNotANumber(multiply(undefined, 3), "Sum of undefined and 3 should return NaN");
tests.isNotANumber(multiply(NaN, 3), "Sum of NaN and 3 should return NaN");

// Edge cases
tests.isEqual(multiply(0, 0), 0, "Sum of 0 and 0 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Sum of Infinity and 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "Sum of -Infinity and 1 should be -Infinity");


//#endregion