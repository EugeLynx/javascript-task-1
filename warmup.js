'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b);
    }
    throw new TypeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year !== 'number') {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    return Math.ceil(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    } else if (hexToRGB(hexColor).every(checkNumber)) {
        let rgbArray = hexToRGB(hexColor);
        let rgb = ''.concat('(', rgbArray[0], ', ', rgbArray[1], ', ', rgbArray[2], ')');

        return rgb;
    }

}

function hexToRGB(hexString) {
    let hexTrimmed = hexString.slice(1);
    let hexArray = [];
    let rgbArray = [];

    for (let i = 0; i < 6; i = i + 2) {
        hexArray.push(hexTrimmed.slice(i, (i + 2)));
    }
    for (let j = 0; j < 3; j++) {
        rgbArray.push(parseInt(hexArray[j], 16));
    }

    return rgbArray;
}

function checkNumber(num) {
    if (num > 255) {
        throw new RangeError();
    }

    return true;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    let fibonacciNumber = 0;
    if (Number.isInteger(n)) {
        if (n >= 0) {
            fibonacciNumber = generateFibonacci(n);
        } else {
            throw new RangeError();
        }

    } else {
        throw new TypeError();
    }

    return fibonacciNumber;
}

function generateFibonacci(n) {
    let fibonacciArray = [0, 1];
    let k = 0;

    while (k < n) {
        fibonacciArray.push(fibonacciArray[n - 1] + fibonacciArray[n]);
        k++;
    }

    return fibonacciArray[n];
}


/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    let result = [];

    if (checkArrayDimensions(matrix)) {
        result = transposeTheMatrix(matrix);
    } else {
        throw new TypeError();
    }

    return result;
}

function checkArrayDimensions(matrix) {
    if (Array.isArray(matrix) && Array.isArray(matrix[0])) {
        if (!Array.isArray(matrix[0][0])) {
            return true;
        }
    }

    return false;
}

function transposeTheMatrix(matrix) {
    let transposedMatrix = [];
    for (let m = 0; m < matrix[0].length; m++) {
        let line = [];
        for (let l = 0; l < matrix.length; l++) {
            line.push(matrix[l][m]);
        }
        transposedMatrix.push(line);
    }

    return transposedMatrix;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if ((!Number.isInteger(n)) || (!Number.isInteger(targetNs))) {
        throw new TypeError();
    }
    if ((targetNs < 2) && (targetNs > 36)) {
        throw new RangeError();
    }

    return n.toString(targetNs);
}


/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    let Boolean = false;
    let start = false;
    let middle = false;
    let ending = false;
    phoneNumber = phoneNumber.split('-');

    if ((phoneNumber[0] === '8') && (phoneNumber[1] === '800')) {
        start = true;
    }
    if ((phoneNumber[2].length === 3)) {
        middle = true;
    }
    if ((phoneNumber[3].length === 2) && (phoneNumber[4].length === 2)) {
        ending = true;
    }
    if (start && middle && ending) {
        Boolean = true;
    }

    return Boolean;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    let result = '';
    if (typeof result !== 'string') {
        throw new TypeError();
    }

    return text.match(/:-\)/).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const vertical = checkVertical(field);
    const horizontal = checkHorizontal(field);
    const mainDiagonal = checkMainDiagonal(field);
    const secondaryDiagonal = checkSecondaryDiagonal(field);

    return (vertical ?? horizontal ?? mainDiagonal ?? secondaryDiagonal ?? 'draw');
}

function checkVertical(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
    }
    return null;
}
function checkHorizontal(field) {
    for (let j = 0; j < 3; j++) {
        if (field[0][j] === field[1][j] && field[1][j] === field[2][j]) {
            return field[0][j];
        }
    }
    return null;
}
function checkMainDiagonal(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    }
    return null;
}
function checkSecondaryDiagonal(field) {
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
    }
    return null;
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
