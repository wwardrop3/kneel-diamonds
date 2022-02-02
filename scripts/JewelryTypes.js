//this module returns html of all style options and sets a temporary style valueId in the order builder when selected

import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "type") {
            setType(event.target.value)
        }
    }
)

export const JewelryTypes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = types.map(
        (type) => {
            return `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
