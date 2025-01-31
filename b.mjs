import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName (tag) { //tag is placeholder name, as 'name' is a windows object

if (typeof tag !== "string") {
    return null;
}

tag = tag.trim();

if (tag === "") {
    return "";
} else if (/[^a-zA-Z\s]/.test(tag)) {
    return null;
}

return tag
    .split(" ")
    .filter(word => word !== "")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("formatName Function");

tests.isEqual(formatName("john doe"), "John Doe", "Formatting 'john doe' to 'John Doe'");
tests.isEqual(formatName(" john doe "), "John Doe", "Formatting ' john doe ' to 'John Doe'");
tests.isEqual(formatName("JOHN DOE"), "John Doe", "Formatting 'JOHN DOE' to 'John Doe'");
tests.isEqual(formatName("john    doe"), "John Doe", "Formatting 'john    doe' to 'John Doe'");
tests.isEqual(formatName(""), "", "Handling empty string");
tests.isEqual(formatName("   "), "", "Handling only spaces");
tests.isEqual(formatName(null), null, "Handling of null");
tests.isEqual(formatName(123), null, "Handling numbers");

//#endregion