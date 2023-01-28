function bestFriend(names) {
    let largestName = '';
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > largestName.length) {
            largestName = names[i];
        }
    }
    return largestName;
}

const arr = ['sazid', 'mamun', 'kamal', 'jubayer-bin-rashed', 'chinku'];
const largestName = bestFriend(arr);
console.log(largestName);