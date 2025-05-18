function generate() {
    let num = document.getElementById('idNumber')
    let tab = document.getElementById('idMultTable')

    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
    idResult.style.display = 'block'
}