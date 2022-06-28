"use strict";
let numeroCarro = 0;  //el numero que sale en el boton del carrito

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let productLength = products.length;
    for (let i = 0; i < productLength; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
            console.clear()
            console.log("cartList:");
            console.table(cartList);
        }
    }
    numeroCarro++;
    document.getElementById("count_product").innerHTML = numeroCarro; //numero carrito
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log("cartList:", cartList);

    // esto para vaciar el carrito en el cartModal. 
    cart.length = 0;
    generateCart();
    printCart();
    document.getElementById("cart_list").innerHTML = "";
    numeroCarro = 0;
    document.getElementById("count_product").innerHTML = numeroCarro;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let cartLength = cartList.length;
    let totalPrice = 0;
    for (let i = 0; i < cartLength; i++) {
        totalPrice += cartList[i].price
    }
    console.log("Total Price: ", totalPrice);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let cartLength = cartList.length;

    for (let i = 0; i < cartLength; i++) {
        let indexID = cartList[i].id;   //el ID de cada item
        let indexCart = cart.findIndex(e => e.id == indexID);   //la posicion en cart del item que tiene ese ID
        if (indexCart < 0) {    //si en cart no hay item con ese ID lo añado y le pondo quantity = 1
            cart.push(cartList[i]);
            cart.at(-1).quantity = 1;
        } else {    //si en cart ya existe ese item le sumo 1 quantity
            cart[indexCart].quantity++;
        }
    }
    console.log("cart:")
    console.table(cart);
    applyPromotionsCart(); // Aplicamos las promociones!!!
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let cartLength = cart.length;
    for (let i = 0; i < cartLength; i++) {
        cart[i].subtotal = (cart[i].price) * (cart[i].quantity);
        cart[i].subtotalWithDiscount = (cart[i].price) * (cart[i].quantity); //pongo con descuento tambien si no hay para facilitar la insercion de datos en el Ex.6
        if ((cart[i].id == 1) && (cart[i].quantity >= 3)) {  // oferta cooking oil
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity
        }
        if ((cart[i].id == 3) && (cart[i].quantity >= 10)) {  // oferta pastís
            cart[i].subtotalWithDiscount = (cart[i].price * 2 / 3) * (cart[i].quantity)
        }
    }
    console.log("cart con promociones:")
    console.table(cart);
}

function emptyCart() { //para vaciar el carrito
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = 0;
}

// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
    emptyCart();
    applyPromotionsCart();
    for (let i = 0; i < cart.length; i++) {
        document.getElementById("cart_list").innerHTML += `<tr><th>${cart[i].name} </th><td> ${cart[i].price} </td><td>
            ${cart[i].quantity} </td><td><button type="button" class="btn-small btn-circle btn-outline-danger" 
            onclick="removeFromCart(${cart[i].id})">-</button></td><td>$ ${cart[i].subtotalWithDiscount}</td>`; //agregamos el boton para borrar los items
    }
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].subtotalWithDiscount;
    }
    document.getElementById("total_price").innerHTML = totalPrice
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    let productLength = products.length;
    for (let i = 0; i < productLength; i++) {
        let indexCart = cart.findIndex(e => e.id == products[i].id) //la posicion en cart del item que tiene ese ID
        if (products[i].id == id) {
            if (indexCart < 0) {    //si en cart no hay item con ese ID lo añado y le pondo quantity = 1
                cart.push(products[i]);
                cart.at(-1).quantity = 1;
            } else {    //si en cart ya existe ese item le sumo 1 quantity
                cart[indexCart].quantity++;
            }
        }
    }
    numeroCarro++;
    document.getElementById("count_product").innerHTML = numeroCarro; //numero carrito
    console.clear();
    console.table(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array ???
    let cartLength = cart.length;
    for (let i = 0; i < cartLength; i++) {
        if ((id == cart[i].id) && (cart[i].quantity > 1)) {
            cart[i].quantity--;
        } else if ((id == cart[i].id) && (cart[i].quantity == 1)) {
            cart.splice(i, 1);
            i = cartLength; // eso para parar el bucle FOR. Si no no encuentra el siguiente i (el array es mas corto)
        }
    }
    numeroCarro--;
    document.getElementById("count_product").innerHTML = numeroCarro;
    printCart();
    console.clear()
    console.table(cart);
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}