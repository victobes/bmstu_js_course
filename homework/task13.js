// Задание 13 (2 уровень)
// Напишите функцию diff, которая возвращает массив, 
// содержащий все элементы первого, которые не находятся во втором.

let diff = function (arr1, arr2) {
    const difference = arr1.filter(x => !arr2.includes(x));
    return difference
}

console.log('Пример 1.')
arr1 = [1, 2, 3]
arr2 = [2, 3]
console.log(diff(arr1, arr2))

console.log('Пример 2.')
arr1 = [1, 2, 3]
arr2 = [0, 3, 5]
console.log(diff(arr1, arr2))

console.log('Пример 3.')
arr1 = [1, 2, 3]
arr2 = [1, 2, 3]
console.log(diff(arr1, arr2))

