const fruitForm = document.querySelector("#inputSection form")
fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e) {

    e.preventDefault() // Stops page from refreshing
    // console.log(e)
    // console.log(e.target[0].value)  // best use
    // console.log(e.target.fruitInput.value)
    
    // addFruit(e.target[0].value)
    fetchFruitData(e.target[0].value)
    e.target[0].value = "" // clears the form after submitting
}

function fetchFruitData(fruit) {
    fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
        .then(processResponse)
        // .then(resp => resp.json())
        .then(data => addFruit(data))
        .catch(err => console.log(err)) 
}

function processResponse (resp) {
    if (resp.ok) {
        return resp.json()
    } else {
        throw "Error: http status code = " + resp.status
    }
}

const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")


let calories = 0
let fruitCal = {}

function addFruit(fruit) {
    console.log(fruit);
    if (!fruit) {
        console.log("Invalid fruit");
    } else {
        const li = document.createElement("li")
        li.addEventListener("click", removeFruit)
        li.textContent = fruit["name"]
        fruitList.appendChild(li)

        fruitCal[fruit.name] = fruit.nutritions.calories
        console.log(fruitCal);

        calories += fruit.nutritions.calories
        fruitNutrition.textContent = calories
    }
}



function removeFruit (e) {
    const fruitName = e.target.textContent
    calories -= fruitCal[fruitName]
    fruitNutrition.textContent = calories

    delete fruitCal[fruitName]

    e.target.remove()
}
