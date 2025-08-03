
// Ações que o carrinho pode fazer
// ✅ ==>  Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ ==> Calcular o totaldo carrinho
async function calculateTotal(userCart) {
  console.log("\n🛒 Total do carrinho é:")

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`💳 Total: R$ ${result}`);
}

//✅ ==> deletar item do carrinho (com base no nome)
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if(index !== -1) {
    userCart.splice(index, 1)
  }
}

// ✅ ==> Remover item do carrinho
async function removeItem(userCart, item) {
  // 1.encontrar o indice do item  
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2.caso não encontre o item 
  if(indexFound == -1) {
    console.log('Item não encontrado')
    return
  }

  // 3. item > 1 subtrair um item
  if(userCart[indexFound].quantity > 1) { 
    userCart[indexFound].quantity -= 1
    return
  }

  // 4.caso item = 1 deletar o item
  if(userCart[indexFound].quantity == 1) { 
    userCart.splice(indexFound, 1)
    return
  }
}

//✅ ==> exibir os itens do carrinho
async function displayCart(userCart) {
  console.log("\n📋 Itens do carrinho:")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} un | Subtotal = R$ ${item.subtotal()}`)
  })
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }