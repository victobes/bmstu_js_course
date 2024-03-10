// location.reload()

// Задача 10 (2 уровень)
// Дан список неотрицательных целых чисел, повторяющихся элементов в списке нет. 
// Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.

let summaryRanges = function (nums) {
    const result = []

    for (let i = 0; i < nums.length; i++) {

        let end = i // индекс крайнего числа в диапазоне

        // пока последовательность возрастает, ув. end
        while (nums[end + 1] === nums[end] + 1) {
            end += 1
        }

        if (end > i) {
            // в диапазоне больше одного числа, "сворачиваем"
            result.push(`${nums[i]}-${nums[end]}`)
        } else {
            // в диапазоне только одно число
            result.push(`${nums[i]}`)
        }

        i = end
    }

    return result
};
console.log(' ================ ЗАДАЧА 10 ================ ')
console.log('Пример 1.')
const test10a = [1, 2, 3, 5, 6, 7, 10, 11, 12, 14, 16, 17, 18]
console.log("[" + test10a.toString() + "]" + " -> " + summaryRanges(test10a).toString())

console.log('Пример 2.')
const test10b = [0, 1, 2, 4, 5, 7]
console.log("[" + test10b.toString() + "]" + " -> " + summaryRanges(test10b).toString())

let test10c = prompt("Введите последовательность для задачи № 10");
test10c = test10c.split(',').map(Number)
console.log('Пример 3 (введенный).')
console.log("[" + test10c.toString() + "]" + " -> " + summaryRanges(test10c).toString())


// ________________________________________________________________________________________________________________________________
// Задание 13 (2 уровень)
// Напишите функцию diff, которая возвращает массив, 
// содержащий все элементы первого, которые не находятся во втором.

let diff = function (arr1, arr2) {
    const difference = arr1.filter(x => !arr2.includes(x));
    return difference
}

console.log(' ================ ЗАДАЧА 13 ================ ')
console.log('Пример 1.')
const arr1a = [1, 2, 3]
const arr2a = [2, 3]
console.log("МАССИВ A: " + arr1a.toString())
console.log("МАССИВ B: " + arr2a.toString())
console.log("A БЕЗ B: " + diff(arr1a, arr2a).toString())

console.log('Пример 2.')
const arr1b = [1, 2, 3]
const arr2b = [0, 3, 5]
console.log("МАССИВ A: " + arr1b.toString())
console.log("МАССИВ B: " + arr2b.toString())
console.log("A БЕЗ B: " + diff(arr1b, arr2b).toString())

console.log('Пример 3.')
const arr1c = [1, 2, 3]
const arr2c = [1, 2, 3]
console.log("МАССИВ A: " + arr1c.toString())
console.log("МАССИВ B: " + arr2c.toString())
console.log("A БЕЗ B: ", diff(arr1c, arr2c).length !=0 ? diff(arr1c, arr2c).toString() : "-")

let arr1d = prompt("Введите массив A для задачи № 13");
let arr2d = prompt("Введите массив B для задачи № 13");
arr1d = arr1d.split(',').map(Number)
arr2d = arr2d.split(',').map(Number)
console.log('Пример 4 (введенный).')
console.log("МАССИВ A: " + arr1d.toString())
console.log("МАССИВ B: " + arr2d.toString())
console.log("A БЕЗ B: ",   diff(arr1d, arr2d).length !=0 ? diff(arr1d, arr2d).toString() : "-")