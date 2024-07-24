const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let mySites = ["kkk","lll"]


document.getElementById("input-btn").addEventListener("click", function(){
    mySites.push(inputEl.value)
    console.log(mySites)
})

for (let i = 0; i < mySites.length; i++) {
    console.log(mySites[i])
    ulEl.innerHTML += `<li>${mySites[i]}</li>`
}