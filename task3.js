
function get_value() {
    a = document.getElementById('number').value
    console.log(a)
    b = document.getElementById('sigma').value
    c = document.getElementById('delta').value
    console.log(b)
    console.log(c)
    var result = 0
    if (b == 'Celsius' && c == 'Farenhit') {
        result = (a * 9 / 5) + 32
    }
    else if (b == 'Celsius' && c == 'Kelvin') {
        result = (a * 1) + 273
    }
    else if (b == 'Farenhit' && c == 'Celsius') {
        result = (a - 32) * 5 / 9
    }
    else if (b == 'Farenhit' && c == 'Kelvin') {
        result = ((a - 32) * 5 / 9) + 273
    }
    else if (b == 'Kelvin' && c == 'Celsius') {
        result = a - 273
    }
    else if (b == 'Kelvin' && c == 'Farenhit') {
        result = ((a - 273) * 9 / 5) + 32
    }
    else {
        result = a
    }

    document.getElementById('display').innerHTML = result


}