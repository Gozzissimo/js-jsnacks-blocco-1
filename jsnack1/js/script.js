
let numberSum = 0;
let numbers = [];

for (let i = 0; i < 10; i++) {
    
    // inserisco un numero
    const number = parseInt(prompt('Inserisci un numero'));
    console.log(number);

    // inserisco il numero in un array
    numbers.push(number);
    console.log(numbers);

    numberSum += number;
}

console.log(numberSum);
