let runningTotal = 0
let buffer = "0"
let number = ''
let previousOperator

const screen = document.querySelector('.screen')
const screenNum = document.querySelector('.screen-num')

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer
    screenNum.innerText = number
}

function handleSymbol(value) {
    switch(value) {
        case 'C':
            buffer = '0'
            number = ''
            runningTotal = 0
            break
        case '=':
            if (previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer))
            previousOperator = null
            buffer = runningTotal
            runningTotal = 0
            break
        case '←':
            if (buffer.length === 1) {
                buffer = '0'
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
                // buffer = buffer.slice(0, buffer.length - 1)
            }
            break
        case '+':
        case '−':
        case '×':
        case '÷':
            hanleMath(value)
            break
    }
}
function handleNumber(value) {
    if (buffer === '0') {
        buffer = value
        number = value
    } else {
        buffer += value
        number += value
    }
}

function hanleMath(value) {
    if (buffer === '0') {
        return
    }
    const initBuffer = parseInt(buffer)

    if (runningTotal === 0) {
        runningTotal = initBuffer
    } else {
        flushOperation(initBuffer)
    }
    previousOperator = value
    buffer = '0'
}

function flushOperation(initBuffer) {
    if (previousOperator === '+') {
        runningTotal += initBuffer
        console.log(screenNum += previousOperator)
    } else if (previousOperator === '−') {
        runningTotal -= initBuffer
    } else if (previousOperator === '×') {
        runningTotal *= initBuffer
    } else if (previousOperator === '÷') {
        runningTotal /= initBuffer
    }
}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', (e) => {
        buttonClick(e.target.innerText)
    })
}
init()