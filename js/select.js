let select = document.querySelector(".inputs__inner-title select")
let recomendations = document.querySelector(".inputs__inner-recomendations")

console.log(select.value)
if (select.value = "a") {
    recomendations.classList.remove("dNone")
    recomendations.classList.add("dFlex")
} else {
    recomendations.classList.remove("dFlex")
    recomendations.classList.add("dNone")
}

select.addEventListener("change",()=> {
    if (select.value != "a") {
        recomendations.classList.remove("dFlex")
        recomendations.classList.add("dNone")
    } else {
        recomendations.classList.remove("dNone")
        recomendations.classList.add("dFlex")
    }
    console.log(select.value)
})