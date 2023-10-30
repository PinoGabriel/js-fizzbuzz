let cards = document.getElementById("my_row");




for (let x = 1; x <= 100; x++) {

    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz")
        const m35 = document.createElement("p")
        m35.innerHTML = `FizzBuzz`
        cards.append(m35)
    } else if (x % 3 == 0) {
        console.log("Fizz")
        const m3 = document.createElement("p")
        m3.innerHTML = `Fizz`
        cards.append(m3)
    } else if (x % 5 == 0) {
        console.log("Buzz")
        const m5 = document.createElement("p")
        m5.innerHTML = `Buzz`
        cards.append(m5)
    } else {
        console.log(x)
        const m = document.createElement("p")
        m.innerHTML = `${x}`
        cards.append(m)
    }

}

console.log("completo");