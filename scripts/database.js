import { buildOrderListItem, Orders } from "./Orders.js"

/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    orderBuilder: {
   
    },
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    types: [
        {id: 1, name: "Ring", multiplier: 1},
        {id: 2, name: "Earing", multiplier: 2},
        {id: 3, name: "Necklace", multiplier: 4},
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            typeId: 1,
            timestamp: 1614659931693
        }
    ]
}


//exports the get metals data array
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

//exports the get sizes data array
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

//exports the get styles data array
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

//exports the get customOrders data array
export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}



//these functions take in the id of the object clicked on and temporarily saves it to the order builder, it changes everytime a user makes a new selection
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}

//this function will permanantly save the temporary data in orderBuilder
export const addCustomOrder = () => {
    //copy current state of user choices variable
    const newOrder = {...database.orderBuilder}

    //add timestamp
    newOrder.timestamp = Date.now()
    
    //find the last index of the orders array
    const lastIndex = database.customOrders.length - 1
    
    //find the id of the last orders array object
    newOrder.id = database.customOrders[lastIndex].id + 1

    //push new order to custom orders array
    database.customOrders.push(newOrder)

    //clear the data in the temp orderbuilder array
    database.orderBuilder={}


    //broadcast notification that the permenant state of customorders has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
    

}
