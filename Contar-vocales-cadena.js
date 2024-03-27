// Escribir un programa que calcule cuantas veces se repiten las vocales en una cadena



function contarVocales(cadena){
    let nVocales = {a : 0, e : 0, i : 0, o : 0, u : 0};

    cadena = cadena.toLowerCase()

    for (let letra of cadena){
        if (nVocales[letra] >= 0) nVocales[letra]+=1
    }

    return nVocales
}

let cadena = "Contar vocales en una cadena";

console.log( contarVocales(cadena) );
