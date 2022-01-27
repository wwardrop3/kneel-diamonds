import { addCustomOrder } from "./database.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//if the stateChanged custom event occurs (as it does everytime the create custom order appears), it will regenerate the html to reflect new order
document.addEventListener(
    "stateChanged",
    (event) => {
        console.log("state of data has changed, regenerating HTML")
        renderAllHTML()
    })

