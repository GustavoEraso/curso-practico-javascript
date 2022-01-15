// const precioOrignal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precionConDescuento = (precio * porcentajePrecioConDescuento)/ 100;
    return precionConDescuento;
}

// console.log({
//     precioOrignal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precionConDescuento,
// })

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue);

    const resultP = document.getElementById("resultP");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}