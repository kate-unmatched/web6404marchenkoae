/**
 * Функция, которая проверяет, является ли число целым используя побитовые операторы
 * @param {number} number - Число для проверки
 * @returns {boolean} - Возвращает true, если number - целое число, если нет - false
 */
function isInteger(number) {
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
    if (number < 0) {
      return null;
    }

    const sum = (number * (number + 1)) / 2;
    return sum;
}

/**
 * Функция, считающую сумму чисел до заданного используя рекурсию
 * @param {number} number - Число, до которого нужно посчитать сумму
 * @param {number} accumulator - Промежуточная сумма
 * @returns {number} - Сумма чисел от 1 до n
 */
function recSumTo(number, accumulator = 0) {
  if (number < 0) {
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
    if (n < 0) {
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
    if (number <= 0) {
        return false;
    }

    return (number & (number - 1)) === 0;
}

/**
 * Функция, которая находит N-е число Фибоначчи (вычислительная сложность O(log N))
 * @param {number} number - индекс числа Фибоначчи
 * @returns {number} - N-е число Фибоначчи
 */
function fibonacci(number) {
    if (number <= 0) return 0;
    if (number === 1) return 1;

    let resultFib = [
        [1, 0],
        [0, 1]
    ];
    let matrix_for_fib = [
        [1, 1],
        [1, 0]
    ];
    let exp = number - 1;

    while (exp > 0) {
        if (exp % 2 === 1) {
            resultFib = [
                [
                    resultFib[0][0] * matrix_for_fib[0][0] + resultFib[0][1] * matrix_for_fib[1][0],
                    resultFib[0][0] * matrix_for_fib[0][1] + resultFib[0][1] * matrix_for_fib[1][1]
                ],
                [
                    resultFib[1][0] * matrix_for_fib[0][0] + resultFib[1][1] * matrix_for_fib[1][0],
                    resultFib[1][0] * matrix_for_fib[0][1] + resultFib[1][1] * matrix_for_fib[1][1]
                ]
            ];
        }

        matrix_for_fib = [
            [
                matrix_for_fib[0][0] * matrix_for_fib[0][0] + matrix_for_fib[0][1] * matrix_for_fib[1][0],
                matrix_for_fib[0][0] * matrix_for_fib[0][1] + matrix_for_fib[0][1] * matrix_for_fib[1][1]
            ],
            [
                matrix_for_fib[1][0] * matrix_for_fib[0][0] + matrix_for_fib[1][1] * matrix_for_fib[1][0],
                matrix_for_fib[1][0] * matrix_for_fib[0][1] + matrix_for_fib[1][1] * matrix_for_fib[1][1]
            ]
        ];

        exp = Math.floor(exp / 2);
    }

    return resultFib[0][0];
}


/** Функция, которая принимает начальное значение и функция операции.
 * Возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (typeof operatorFn !== 'function') {
      return () => initialValue;
    }
  
    let storedValue = initialValue;
  
    return (newValue) => storedValue = operatorFn(storedValue, newValue);
}

/**
 * Функция создания генератора арифметической последовательности.
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
function sequence(start = 0, step = 1) {
  let currentValue = start;

  return () => {
    const result = currentValue;
    currentValue += step;
    return result;
  };
}

/**
 * Функция, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитываются специфичные объекты (Date, RegExp, Map, Set)
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
  if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
    return true;
  }

  if (firstObject === secondObject) {
    return true;
  }

  if (
    firstObject === null || typeof firstObject !== 'object' ||
    secondObject === null || typeof secondObject !== 'object'
  ) {
    return false;
  }

  if (firstObject instanceof Date && secondObject instanceof Date) {
    return firstObject.getTime() === secondObject.getTime();
  }

  if (firstObject instanceof RegExp && secondObject instanceof RegExp) {
    return firstObject.toString() === secondObject.toString();
  }

  if (firstObject instanceof Map && secondObject instanceof Map) {
    if (firstObject.size !== secondObject.size) return false;
    for (let [key, value] of firstObject) {
      if (!secondObject.has(key) || !deepEqual(value, secondObject.get(key))) {
        return false;
      }
    }
    return true;
  }

  if (firstObject instanceof Set && secondObject instanceof Set) {
    if (firstObject.size !== secondObject.size) return false;
    for (let value of firstObject) {
      if (!secondObject.has(value)) {
        return false;
      }
    }
    return true;
  }

  if (Array.isArray(firstObject) && Array.isArray(secondObject)) {
    if (firstObject.length !== secondObject.length) return false;
    for (let i = 0; i < firstObject.length; i++) {
      if (!deepEqual(firstObject[i], secondObject[i])) {
        return false;
      }
    }
    return true;
  }

  if (Array.isArray(firstObject) !== Array.isArray(secondObject)) {
    return false;
  }

  const keysFirst = Object.keys(firstObject);
  const keysSecond = Object.keys(secondObject);

  if (keysFirst.length !== keysSecond.length) {
    return false;
  }

  for (const key of keysFirst) {
    if (!secondObject.hasOwnProperty(key)) {
      return false;
    }

    if (typeof firstObject[key] === 'function' && typeof secondObject[key] === 'function') {
      if (firstObject[key] !== secondObject[key]) {
        return false;
      }
      continue;
    }

    if (!deepEqual(firstObject[key], secondObject[key])) {
      return false;
    }
  }

  return true;
}

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
