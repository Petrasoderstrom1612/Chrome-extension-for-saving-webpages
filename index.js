const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let mySites = []

let mySitesFromLocalStorage = JSON.parse(localStorage.getItem("mySites")) //declare a variable my sites from local storage to be the parsed value from local storage
console.log(mySitesFromLocalStorage)

if(mySitesFromLocalStorage) { //if I have some sites saved in local storage, I want to display them on render
    mySites = mySitesFromLocalStorage //give my array the values from local storage
    displayMySites() //display it
}

document.getElementById("input-btn").addEventListener("click", function(){
    mySites.push(inputEl.value) //on user's input ass the users input to the array mySites
    inputEl.value = ""  //clear the input field so it looks pretty and indicates you added your input 

    localStorage.setItem("mySites", JSON.stringify(mySites)) //save the new input into local storage
    displayMySites() //display all the inputs
})


function displayMySites(){ //instead of looping through mySites and slowing down the page, we can create one extra variable and keep adding the new mySites to it and only render the stored new variable with all mySites, instead of updating on every loop. Remember! DOM manipulation comes with a cost.
    let listItems = ""
    for (let i = 0; i < mySites.length; i++) {
    listItems += `<li><a href="${mySites[i]}" target="_blank">${mySites[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}

