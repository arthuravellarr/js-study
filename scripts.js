function load() {
    var message = window.document.getElementById('idMsg')
    var image = window.document.getElementById('idImg')   

    var date = new Date()
    var hour = date.getHours()
    message.innerHTML = `It's ${hour}h now`

    if (hour >= 4 && hour < 12) {
        image.src = 'imgs/img-morning.png'
        document.body.style.background = '#d1a858'
    } else if (hour >= 12 && hour < 18) {
        image.src = 'imgs/img-afternoon.png'
        document.body.style.background = '#d1a858'
    } else {
        image.src = 'imgs/img-night.png'
        document.body.style.background = '#0d3661'
    }
}
