// Escribir un programa que imprima los numeros del 1 al 100

// Para los multiplos de 3 imrpimir Fizz
// Para los multiplos de 5 imrpimir Buzz
// Para los multiplos de ambos imprimir FizzBuzz


function FizzBuzz(){
    for (let num=1; num<=100; num++){
        let resul="";

        if (num % 3 === 0){
            resul += 'Fizz';
        }
      
        if (num % 5 === 0){
            resul += 'Buzz';
        }
        console.log(resul || num);
    }
}

FizzBuzz()



