import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = [] // lista de desejo.

console.log("Bem vindo ao seu carrinho da Shopee!")

// criando dois itens 
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);


// adicionei dois itens ao carrinho 
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// remover itens do carrinho 
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);


await cartService.displayCart(myCart);


// ==> adcionar item no carrinho 
// await cartService.addItem(myWishList, item3)

//==> deletei dois  item do carrinho
//await cartService.deleteItem(mycart, item2.name);
//await cartService.deleteItem(mycart, item1.name);


await cartService.calculateTotal(myCart)