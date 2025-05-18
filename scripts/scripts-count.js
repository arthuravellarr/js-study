function count() {
    let [start, end, step, result] = [document.getElementById('idStart'), document.getElementById('idEnd'), document.getElementById('idStep'), document.getElementById('idResult')]
    
    if (start.value == end.value) {
        window.alert('Start value and End value must be different!')
        result.innerHTML = 'Preparing the count...'
    } else {
        result.innerHTML = 'Counting... <br>'
        let [s, e, st] = [Number(start.value), Number(end.value), Number(step.value)]

        if (s < e) {
            for (let c = s; c <= e; c += st) {
                result.innerHTML += ` ${c} \u{1F449}\u{1F3FD} `
            }
        } else {
            for (let c = s; c >= e; c -= st) {
                result.innerHTML += ` ${c} \u{1F449}\u{1F3FD} `
            }
        }
        
        result.innerHTML += `\u{1F3C1}`
    }
}