// файл script.js
window.onload = function () {

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null

    let outputElementON = true
    let wrapperColorChanged = false

    // окно вывода результата
    outputElement = document.getElementById("result")

    document.getElementById("btn_backspace").onclick = function () {
        if (a === '' || (selectedOperation && b === '')) return

        if (b === '') {
            if (a.length === 1) {
                a = ''
                outputElement.innerHTML = '0'
                return
            }

            a = a.slice(0, -1)
            outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
        } else {
            if (b.length === 1) {
                b = '0'
                outputElement.innerHTML = '0'
                return
            }

            b = b.slice(0, -1)
            outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
        }
    }

    wrapperElement = document.getElementById("wrapper")

    document.getElementById("btn_change_color").onclick = function () {
        if (!wrapperColorChanged) {
            wrapperElement.style.backgroundColor = "#ffa1d5";
            wrapperColorChanged = true
        }
        else {
            wrapperElement.style.backgroundColor = "white";
            wrapperColorChanged = false
        }
    }



    document.getElementById("btn_power").onclick = function () {
        if (outputElementON === true) {
            outputElement.style.backgroundColor = "black";
            outputElement.style.color = "black";
            outputElementON = false;
        }
        else {
            outputElement.style.backgroundColor = "#0b5a3e";
            outputElement.style.color = "#fcffe8";
            outputElementON = true;
        }
    }

    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                b += digit
                outputElement.innerHTML = b
            }
        }
    }

    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function () {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });

    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function () {
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function () {
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function () {
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function () {
        if (a === '') return
        selectedOperation = '/'
    }

    document.getElementById("btn_op_sign").onclick = function () {
        if (a === '') return
        selectedOperation = '+/-'
    }
    document.getElementById("btn_op_percent").onclick = function () {
        if (a === '') return
        selectedOperation = '%'
    }
    document.getElementById("btn_op_sqr").onclick = function () {
        if (a === '') return
        selectedOperation = '^'
    }
    document.getElementById("btn_op_factorial").onclick = function () {
        if (a === '') return
        selectedOperation = '!'
    }
    document.getElementById("btn_op_sqrt").onclick = function () {
        if (a === '') return
        selectedOperation = 'sqrt'
    }


    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function () {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    function factorial(num) {
        if (num < 0) { return -1; }
        else if (num === 0) { return 1; }
        else { return num * factorial(num - 1); }
    }

    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function () {

        // if (a === '' || b === '' || !selectedOperation)
        //     return

        if (a === '' || !selectedOperation)
            return

        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;

            case '+/-':
                expressionResult = (+a) * (-1)
                break;
            case '%':
                expressionResult = (+a) % (+b)
                break;

            case '^':
                expressionResult = (+a) * (+a)
                break;
            case '!':
                expressionResult = factorial(a)
                break;
            case 'sqrt':
                expressionResult = Math.sqrt(a)
                break;
        }

        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }
};