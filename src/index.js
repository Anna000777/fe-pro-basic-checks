/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((item) => { return `${item[0].toUpperCase()}${item.slice(1)}` }).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    return string.split('').map((item, index) => { return index % 2 ? item.toUpperCase() : item.toLowerCase() }).join('');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(command, string) {
    if (command === 'uppercase') {
        return string.toUpperCase();
    } else if (command === 'lowercase') {
        return string.toLowerCase();
    } else if (command === 'capitalize') {
        return string.split(' ').map((item) => { return `${item[0].toUpperCase()}${item.slice(1)}` }).join(' ');
    } else if (command === 'fence') {
        return string.split('').map((item, index) => { return index % 2 ? item.toUpperCase() : item.toLowerCase() }).join('');
    } else {
        return string;
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (command, string) => {
    switch (command) {
        case 'uppercase':
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'capitalize':
            return string.split(' ').map((item) => { return `${item[0].toUpperCase()}${item.slice(1)}` }).join(' ');
        case 'fence':
            return string.split('').map((item, index) => { return index % 2 ? item.toUpperCase() : item.toLowerCase() }).join('');
        default:
            return string;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let letter of string) {
        console.log(letter);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while (i < string.length) {
        console.log(string[i]);
        i++;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => string.split('').forEach((letter) => console.log(letter));