/**
 * Функция, которая проверяет, является ли число целым используя побитовые операторы
 * @param {number} number - Число для проверки
 * @returns {boolean} - Возвращает true, если number - целое число, если нет - false
 */
const cache = {};

function isInteger(number) {
    //  number === (num | 0)
    return (number === (number >> 0))
}

/**
 * Функция, которая возвращает массив четных чисел от 2 до 20 включительно
 * @returns {number[]} - Возвращает {x∈Z ∣ x=2n, n∈Z, 1≤n≤10}
 */
function even() {
    const evenNumbers = [];
    for (let i = 2; i <= 20; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

/**
 * Функция, считающая сумму чисел до заданного используя цикл
 * @param {number} number - Число, до которого нужно посчитать сумму
 * @returns {number} - Сумма чисел от 1 до n
 */
function sumTo(number) {

    // if (number in cache) {
    //     console.log("I'm in cache, number " + number)
    //     return cache[number];
    // }
    const sum = (number * (number + 1)) / 2;
    // cache[number] = sum;
    return sum;
}

/**
 * Функция, считающую сумму чисел до заданного используя рекурсию
 * @param {number} number - Число, до которого нужно посчитать сумму
 * @param {number} accumulator - Промежуточная сумма
 * @returns {number} - Сумма чисел от 1 до n
 */
function recSumTo(number, accumulator = 0) {
  if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
    return null;
  }
  
  if (number === 0 ) {
    return 1;
  }

  if (number === 1) {
    return accumulator + 1;
  }

  return recSumTo(number - 1, accumulator + number);
  }

/**
 * Функция, считающая факториал заданного числа
 * @param {number} number - Число, у которого нужно посчитать факториал
 * @param {number} accumulator - Промежуточная сумма
 * @returns {number} - Факториал числа number
 */
function factorial(n, accumulator = 1) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
      return null;
    }
  
    if (n === 0) {
      return accumulator;
    }
  
    return factorial(n - 1, accumulator * n);
  }

/**
 * Функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {number} number - Число, котороее нужно проверить на степень двойки
 * @returns {boolean} - Возвращает true, если number - степень двойки, если нет - false
 */
function isBinary(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
        return false;
    }

    return (number & (number - 1)) === 0;
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
