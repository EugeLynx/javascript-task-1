'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isNaN(a) === false && isNaN(b) === false) {
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
    if (isNaN(year) === true) {
        throw new TypeError();
    } else if (year < 0) {
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
        return hexToRGB(hexColor);
    }

}


function hexToRGB(hex) {
    let hexTrimmed = hex.splice(0, 1);
    let hexArray = [];
    let rgbArray = [];
    let rgb = '';
    for (let i = 0; i < 6; i = i + 2) {
        hexArray.push(hexTrimmed.slice(i, (i + 1)));
    }
    for (let j = 0; j < 3; j++) {
        rgbArray.push(parseInt(hexArray(j), 10));
    }
    rgb = rgb.concat(rgbArray[0], ', ', rgbArray[1], ', ', rgbArray[2]);

    return rgb;
}

function checkNumber(num) {
    if (num > 255) {
        throw new RangeError();
    }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    let fibbonacciNumber = 0;
    if (Number.isInteger(n)) {
        if (n >= 0) {
            fibbonacciNumber = generateFibonacci(n);
        } else {
            throw new RangeError();
        }

    } else {
        throw new TypeError();
    }

    return fibbonacciNumber;
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
        if (Array.isArray(matrix[0][0] !== true)) {

            return true;
        }
    }

    return false;
}

function transposeTheMatrix(matrix) {
    let transposedMatrix = [];
    let line = [];
    for (let m = 0; m < matrix[0].length; m++) {
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
    // Ваше решение
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
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
