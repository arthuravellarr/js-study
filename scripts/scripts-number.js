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

function showOnSelect(n) {
    let item = document.createElement('option')
    item.text = `${n} added to list`
    item.value = `tab${values.indexOf(Number(n))}`
    list.appendChild(item)
}
 
function add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        showOnSelect(num.value)
        result.innerHTML = ''
    } else {
        window.alert('Invalid or already added to the list!')
    }

    num.value = ''
    num.focus()
}

function sumValues(array) {
    let total = 0
    for (let n in array) {
        total += array[n]
    }

    return total
}

function finalize() {
    if (values.length === 0) {
        window.alert('No data to analyze, add some number!')
    } else {
        let total = values.length
        let [max, min] = [Math.max(...values), Math.min(...values)]
        let average = sumValues(values) / total

        result.innerHTML = ''
        result.innerHTML += `<p><strong>${total}</strong> numbers added</p>`
        result.innerHTML += `<p>The biggest number is <strong>${max}</strong>, and smaller is <strong>${min}</strong></p>`
        result.innerHTML += `<p>The sum numbers is <strong>${sumValues(values)}</strong></p>`
        result.innerHTML += `<p>The average is <strong>${average}</strong></p>`

        result.style.display = 'block'
    }
}