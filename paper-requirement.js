function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const totalPageRequirements = firstBookQuantity * firstBookPage
        + secondBookQuantity * secondBookPage
        + thirdBookQuantity * thirdBookPage;
    return totalPageRequirements;
}

const totalPageRequirements = paperRequirements(10, 10, 10);
console.log(totalPageRequirements);