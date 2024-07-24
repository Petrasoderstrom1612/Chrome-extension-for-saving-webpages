const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let mySites = []


document.getElementById("input-btn").addEventListener("click", function(){
    mySites.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`
}