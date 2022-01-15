

function calcularMediaAritmetica (lista){
    // let sumaLista = 0;
    
    // for (let i = 0; i< lista.length; i++){
        
    //     sumaLista = sumaLista + lista[i];
        
    // }
    
    const sumaLista = lista.reduce(
        // .reduce() es un metodo otros .map .filter
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}
