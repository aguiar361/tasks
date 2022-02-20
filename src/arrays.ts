/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArr = [];
    if (numbers.length > 0) {
        newArr.push(numbers[0], numbers[numbers.length - 1]);
    }
    /**if (numbers.length > 2) {
        newArr.splice(0, 0, numbers[0]);
        newArr.splice(0, 0, numbers[-1]);
    } else if (numbers.length === 1) {
        newArr.splice(0, 0, numbers[0]);
        newArr.splice(0, 0, numbers[0]);
    } else {
        return newArr;
    }*/
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const TripledArr = numbers.map((numbers: number): number => numbers * 3);
    return TripledArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const Integs = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : parseInt(num)
    );

    return Integs;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newArr = amounts.map((amount: string): string =>
        amount.replace("$", "")
    );
    const numsArr = newArr.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    /**numsArr.map((amount: string): number => amount.parseint());
    parseInt(numsArr, numsArr.length); Number; */
    return numsArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newArr = messages.map((message: string): string =>
        message.charAt[message.length - 1] === "!"
            ? message.toUpperCase
            : message
    );
    const newNewArr = newArr.filter(
        (message: string): boolean => message.charAt[-1] === "?"
    );
    return newNewArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    const newArr = words.map((word: string): string =>
        word.length > 4 ? (count += 1) : word
    );
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
