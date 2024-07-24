const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let mySites = ["kkk","lll","g"]


document.getElementById("input-btn").addEventListener("click", function(){
    mySites.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){ //instead of looping through mySites and slowing down the page, we can create one extra variable and keep adding the new mySites to it and only render the stored new variable with all mySites, instead of updating on every loop. Remember! DOM manipulation comes with a cost.
    let listItems = ""
    for (let i = 0; i < mySites.length; i++) {
    listItems += `<li>${mySites[i]}</li>`
    }
    ulEl.innerHTML = listItems
}

