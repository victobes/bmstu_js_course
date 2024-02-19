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

console.log('Пример 1.')
test = [1, 2, 3, 5, 6, 7, 10, 11, 12, 14, 16, 17, 18]
console.log(summaryRanges(test).toString())

console.log('Пример 2.')
test = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(test).toString())