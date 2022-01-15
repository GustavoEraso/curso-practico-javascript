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


// RETO CALCULAR ALTURA TRIANGULO ISOCELES

function alturaTrianguloIsoceles(lado1, lado2, base){

    if(Number(lado1)=== Number(lado2)){
        const hipotenusa = lado1;
        const catetoA = Number(base) / 2;
        const altura = Math.sqrt((hipotenusa * hipotenusa) - (catetoA * catetoA));

        return console.log("La altura es " + altura+ "cm");
    }
    else{
        return console.log("No es un triangulo isoceles");
    }
}

///////////////////////////////////////////////////////////////////////


console.groupEnd()

    //Código del circulo
console.group("Circulos");

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




//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
}

function calcularAreaCuadrado(){
    
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    alert(area);

}