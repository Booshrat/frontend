const fruitForm = document.querySelector("#inputSection form")
fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e) {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target[0].value)  // best use
    // console.log(e.target.fruitInput.value)

    addFruit(e.target[0].value)

    e.target[0].value = "" // clears the form after submitting



}

const fruitList = document.querySelector("#fruitSection ul")
function addFruit(fruit) {
    if (!fruit) {
        console.log("Invalid fruit");
    } else {
        const li = document.createElement("li")
        li.textContent = fruit
        fruitList.appendChild(li)
    }
}
