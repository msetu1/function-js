/* 
1.chair=3 cft
2.table =10 cft
3.table =50 cft
vary : quantity
*/
/* function woodCalculator(chairQuantity, tableQuantity, badQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = badQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood
    return totalWood
}
const totalQuantity = woodCalculator(2, 4, 5);
console.log(totalQuantity) */


/* function woodCalculator(chairQuantity, tableQuantity, bedQantity) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;
    const chairWood = chairQuantity * perChair
    const tableWood = tableQuantity * perTable
    const bedWood = bedQantity * perBed
    totalWood = chairWood + tableWood + bedWood
    return totalWood;
}
const totalQuantity = woodCalculator(1, 1, 1)
console.log(totalQuantity) */

/* const phones = [
    { name: 'samsung', prcessor: 'i5', storage: '32GB', price: 37000, color: 'black' },
    { name: 'walton', prcessor: 'i5', storage: '32GB', price: 25000, color: 'black' },
    { name: 'oppo', prcessor: 'i5', storage: '32GB', price: 36000, color: 'black' },
    { name: 'nokia', prcessor: 'i6', storage: '32GB', price: 20000, color: 'golden' },
    { name: 'redmi', prcessor: 'i5', storage: '32GB', price: 26000, color: 'black' },
    { name: 'realmi', prcessor: 'i5', storage: '32GB', price: 30000, color: 'white' },
    { name: 'xaomi', prcessor: 'i5', storage: '32GB', price: 50000, color: 'black' },
    { name: 'iphone', prcessor: 'i5', storage: '32GB', price: 100000, color: 'black' }

]
function cheapestPhone(phones) {
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const silectPhone = cheapestPhone(phones);
console.log(silectPhone); */

/* const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2000 },
    { name: 'pant', price: 1000 },
    { name: 'belt', price: 500 }
]
function totalCost(products) {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // console.log(product)
        sum = sum + product.price
    }
    return sum;
}
const expense = totalCost(shoppingCart)
console.log('total expense', expense) */

const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2000, quantity: 5 },
    { name: 'pant', price: 1000, quantity: 4 },
    { name: 'belt', price: 500, quantity: 3 }
]
function totalCost(products) {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // console.log(product)
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct
    }
    return sum;
}
const expense = totalCost(shoppingCart)
console.log('total expense', expense)