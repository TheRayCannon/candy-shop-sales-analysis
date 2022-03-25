function getTotalItemSales(sales, itemId) {
    let itemSales = sales.filter(sale => sale.itemId === itemId)
    let itemQuantities = itemSales.map(sale => sale.quantity)
    return itemQuantities.reduce((sum, number) => sum + number, 0)
}



function getItemById(items, id) {
    return items.find(item => item.id === id)
}


function addTotalSalesToItems(sales, items) {
    return items.map(n => {
        const itemId = n.id
        const item = getItemById(items, itemId)
        const quantity = getTotalItemSales(sales, itemId)
        return {
            ...item,
            quantity: quantity
        }
    })
}


module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    //addTotalValueToItems
}