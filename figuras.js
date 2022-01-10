//Código del cuadrado

console.group("cuadrados");

function perimetroCuadrado(lado){
    return  lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;

} 
console.groupEnd();


//Código del triangulo
console.group("triangulos");


function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;

} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
 console.groupEnd()

    //Código del circulo
console.group("Circilos");

//diametro
function diametroCirculo(radio){
    return radio * 2;
}

//pi

const PI = Math.PI;
console.log("PI es:" + PI);

//circunsferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

    // tambien podria ser: return diametroCirculo(radio) * PI;
}


// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();