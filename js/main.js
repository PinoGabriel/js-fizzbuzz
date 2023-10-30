let myCard = document.getElementById("my_card");

/* for (let x = 1; x <= 100; x++) {

    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz")
        const m35 = document.createElement("div")
        m35.innerHTML = `FizzBuzz`
        myCard.append(m35)
        m35.classList.add("myclass", "red")
    } else if (x % 3 == 0) {
        console.log("Fizz")
        const m3 = document.createElement("div")
        m3.innerHTML = `Fizz`
        myCard.append(m3)
        m3.classList.add("myclass", "green")
    } else if (x % 5 == 0) {
        console.log("Buzz")
        const m5 = document.createElement("div")
        m5.innerHTML = `Buzz`
        myCard.append(m5)
        m5.classList.add("myclass", "yellow")
    } else {
        console.log(x)
        const m = document.createElement("div")
        m.innerHTML = `${x}`
        myCard.append(m);
        m.classList.add("myclass", "blue")
    }

} */

for (let x = 1; x <= 100; x++) {
    const element = document.createElement("div")
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz")
        element.innerHTML = `FizzBuzz`
        element.classList.add("red")
    } else if (x % 3 == 0) {
        console.log("Fizz")
        element.innerHTML = `Fizz`
        element.classList.add("green")
    } else if (x % 5 == 0) {
        console.log("Buzz")
        element.innerHTML = `Buzz`
        element.classList.add("yellow")
    } else {
        console.log(x)
        element.innerHTML = `${x}`
        element.classList.add("blue")
    }

    element.classList.add("myclass");
    myCard.append(element)
}



console.log("completo");

