# 🛍️ Carrinho de Compras estilo Shopee com Node.js

Este repositório contém um projeto desenvolvido durante a Formação Node.js da DIO. O objetivo é criar um carrinho de compras funcional inspirado na experiência da Shopee, utilizando JavaScript moderno com Node.js.

---

## 🎯 Objetivo

Desenvolver um sistema de carrinho de compras que:

- Armazene itens com nome, preço e quantidade
- Calcule automaticamente o subtotal de cada item
- Calcule o total geral do carrinho
- Permita adicionar, remover, deletar e exibir itens

---

## 🧩 Domínio da Aplicação

**Carrinho de Compras**

### 📦 Entidades Representadas

| Entidade | Arquivo        | Descrição                                      |
|----------|----------------|------------------------------------------------|
| Carrinho | `cart.js`      | Gerencia os itens e operações do carrinho     |
| Item     | `item.js`      | Representa um produto com subtotal calculado   |

---

## ⚙️ Funcionalidades Implementadas

### ✅ Adicionar item ao carrinho
```js
async function addItem(userCart, item)


✅ Calcular total do carrinho
async function calculateTotal(userCart)

✅ Deletar item pelo nome
async function deleteItem(userCart, name)

✅ Remover item (reduz quantidade ou exclui)
async function removeItem(userCart, item)

✅ Exibir itens do carrinho
async function displayCart(userCart)

✅ Criar item com subtotal automático
async function createItem(name, price, quantity)


📌 Exemplo de Uso

import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)


🚀 Tecnologias Utilizadas
Node.js

JavaScript (ES6+)

Módulos ECMAScript

📚 Créditos
Projeto desenvolvido como parte da Formação Node.js da DIO.



