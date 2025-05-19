function load() {
    var message = window.document.getElementById('idMsg')
    var image = window.document.getElementById('idImg')   

    var date = new Date()
    var timeStamp = new Intl.DateTimeFormat('en-us', {timeStyle: "short"}).format(date)
    message.innerHTML = `It's <strong>${timeStamp}</strong> now`

    var hour = Number(timeStamp.split(' ')[0].split(':')[0])
    var period = timeStamp.split(' ')[1]

    if (period === 'AM') {
        if (hour >= 4) {
            image.src = '../imgs/img-morning.png'
            document.body.style.background = 'linear-gradient(7deg,rgba(255, 243, 185, 1) 29%, rgba(255, 157, 160, 1) 100%)'
        } else {
            image.src = '../imgs/img-night.png'
            document.body.style.background = 'linear-gradient(7deg,rgb(23, 81, 143) 0%, rgba(13, 54, 97, 1) 40%, rgba(0, 0, 0, 1) 100%)'
        }
    } else {
        if (hour < 6) {
            image.src = '../imgs/img-afternoon.png'
            document.body.style.background = 'linear-gradient(7deg,rgba(209, 168, 88, 1) 8%, rgba(255, 157, 160, 1) 65%, rgba(206, 129, 181, 1) 100%)'
        } else {
            image.src = '../imgs/img-night.png'
            document.body.style.background = 'linear-gradient(7deg,rgb(23, 81, 143) 0%, rgba(13, 54, 97, 1) 40%, rgba(0, 0, 0, 1) 100%)'
        }
    }
}
