import {  getMetals, getOrders, getStyles, getSizes } from "./database.js"




//turns the new order into a list item to be display
export const buildOrderListItem = (order) => {
    const metals = getMetals()
    const foundMetal = metals.find(
        //returns OBJECT
        (metal) => {
            return metal.id === parseInt(order.metalId)
        }
    )
    
    let totalCost = foundMetal.price
    
    const sizes = getSizes()
    const foundSize = sizes.find(
        //RETURNS OBJECT
        (size) => {
            //returns the first object that meets the criteria below
            return size.id === parseInt(order.sizeId)
        }
    )
    totalCost += foundSize.price
       
    const styles = getStyles()
    const foundStyle = styles.find (
        (style) => {
            return style.id === parseInt(order.styleId)
        }
    )

    totalCost += foundStyle.price

    //iterpolate metal price to get the right formatting
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    

    return `<li>
        Order #${order.id} costs ${costString}
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

