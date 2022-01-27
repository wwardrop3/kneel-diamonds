import {  getMetals, getOrders, getStyles, getSizes } from "./database.js"





//turns the new order into a list item to be display
export const buildOrderListItem = (order) => {

    //returns object
    const foundMetal = getMetals().find(
        (metal) => {
            if(metal.id === parseInt(order.metalId)){
                return true
            }
            return false
        })
        //returns object
    const foundPrice = getSizes().find(
        (size) => {
            if(size.id === parseInt(order.sizeId)){
                return true
            }
            return false
        }
    )
    
    //returns object
    const foundStyle = getStyles().find(
        (style) => {
            if(style.id === parseInt(order.styleId)){
                return true
            }
            return false
        }
    )
    //adds each price property value from the found objects
    const price = foundStyle.price + foundStyle.price + foundMetal.price

    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs $${price}
    </li>`
}

//returns an updated orders list based on most recent state of custom orders
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   //get the current state of custom orders
    const orders = getOrders()

    let html = "<ul>"


//for every custom order, build out the html using buildlistitem order and returns an array of new html
    const listItems = orders.map(
        (order) => {
            return buildOrderListItem(order)})


        //returns a single html string of the order
    html += listItems.join("")
    html += "</ul>"

    //returns an updated list of all orders
    return html
}

