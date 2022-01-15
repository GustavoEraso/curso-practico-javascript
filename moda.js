const lista1 = [
    1,
    3,
    3,
    4,
    2,
    2,
    6,
    7,
    3,


];

// const lista1Count = {};

// lista1.map(
//     function(elemento){

//        if (lista1Count[elemento]){

//            lista1Count[elemento] += 1;

//        }else{

//            lista1Count[elemento] = 1;
//        }

//     }
// );

// const lista1CountArray = Object.entries(lista1Count).sort(
//     function(valorAcumulado, nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1];

//     }
// );


function encontrarModa(array){
    
    const lista1Count = {};
    
    array.map(
        function(elemento){

            if (lista1Count[elemento]){
           
            lista1Count[elemento] += 1;
           
            }else{
           
            lista1Count[elemento] = 1;
            }
        
        }
    );
    
    const lista1CountArray = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    
    );
    return lista1CountArray[lista1CountArray.length - 1];
}
