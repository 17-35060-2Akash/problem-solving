function primeNumber() {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        if (i == 2 || i == 3 || i == 5 || i == 7 || i == 11) {
            console.log(i);
            counter++;
        }
        else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0) {

            continue;


        }
        else {
            console.log(i);
            counter++;
        }

    }
    return counter;
}

console.log('The Prime Numbers Are:');
let number = primeNumber();
console.log('Total Numbers:', number);