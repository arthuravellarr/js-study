let num = document.getElementById('idNumber')
let list = document.getElementById('idNumbersList')
let result = document.getElementById('idResult')
let values = []

function isNumber(n) {
    return (Number(n) >= 1 && Number(n) <= 100)
}

function inList(n, l) {
    return (l.indexOf(Number(n)) != -1)
}

function add() {
    if (isNumber(num.value) && !inList(num.value, list)) {

    } else {
        window.alert('Invalid!')
    }
}