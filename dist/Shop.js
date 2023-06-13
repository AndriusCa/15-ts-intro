"use strict";
console.clear();
// constructor
const shopName = "Darzove";
const shop = {
    shopName: "Darzove",
    currency: "Eur",
    inventor: [],
};
const baklazanas = {
    productId: 1,
    productName: "Baklazanas",
    acquisitionPrice: 2,
    sellPrice: 4,
    quantity: 15,
};
const cukinija = {
    productId: 2,
    productName: "Cukinija",
    acquisitionPrice: 1,
    sellPrice: 3,
    quantity: 45,
};
const avokadas = {
    productId: 3,
    productName: "Avokadas",
    acquisitionPrice: 1,
    sellPrice: 3,
    quantity: 30,
};
console.clear();
// methods...
function intro() {
    return `Sveiki atvyke i ${shopName}!`;
}
function addProduct(shop, baklazanas) {
    shop.inventor.push(baklazanas);
    shop.inventor.push(cukinija);
    shop.inventor.push(avokadas);
}
addProduct(shop, baklazanas);
function sellProduct(shop, productId, quantity) {
    const product = shop.inventor.find((product) => productId === productId);
    if (product) {
        if (product.quantity >= quantity) {
            product.quantity -= quantity;
        }
        else {
            console.log("Nepakankamas prekių kiekis!");
        }
    }
    else {
        console.log("Prekė nerasta!");
    }
}
