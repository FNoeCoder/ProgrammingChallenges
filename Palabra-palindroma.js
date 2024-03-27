// Escribir un programa que imprima si una palabra es palindroma o no

const VOCALES_ACENTUADAS_NORMALES = {
    "á" : "a",
    "é" : "e",
    "í" : "i",
    "ó" : "o",
    "ú" : "u"
}


function sustituirVocalesAcentuadas(palabra){
    let palabraNueva = "";

    for (let letra of palabra){
        if (["á","é","í","ó","ú"].includes(letra)) letra = VOCALES_ACENTUADAS_NORMALES[letra]
        palabraNueva+= letra;
    }

    return palabraNueva
}

function esPalindroma(palabra){

    palabra = palabra.toLowerCase();

    palabra = sustituirVocalesAcentuadas(palabra);

    let palabraAlRevez = "";

    for (let letra of palabra ){
        palabraAlRevez = letra + palabraAlRevez
    }

    return palabra === palabraAlRevez;
}

let palabra = "neuquén";

console.log(`¿La palabra ${palabra} es palindromo?: ${esPalindroma(palabra)}`    );
