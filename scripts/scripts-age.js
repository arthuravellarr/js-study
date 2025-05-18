function vefify() {
    var date = new Date()
    var year = date.getFullYear()
    var inputY = document.getElementById('idYearInput')
    var result = document.querySelector('div#idResult')

    if (inputY.value > year) {
        window.alert('The year cannot be greater than the current year!')
    } else {
        var radio = document.getElementsByName('radGender')
        var gender = radio[0].checked ? gender = 'Man' : gender = 'Woman'
        var age = year - Number(inputY.value)   
        var img = document.createElement('img')
        var source = ''

        if (age >= 0 && age < 10) {
            radio[0].checked ? source = '../imgs/boy.png' : source = '../imgs/girl.png'
        } else if (age < 21) {
            radio[0].checked ? source = '../imgs/young-man.png' : source = '../imgs/young-woman.png'
        } else if (age < 50) {
            radio[0].checked ? source = '../imgs/man.png' : source = '../imgs/woman.png'
        } else {
            radio[0].checked ? source = '../imgs/old-man.png' : source = '../imgs/old-woman.png'
        }

        result.style.textAlign = 'center'
        result.innerHTML = `${gender}, ${age} years old`
        img.setAttribute('id', 'image')
        img.setAttribute('src', source)
        result.appendChild(img)
    }


}