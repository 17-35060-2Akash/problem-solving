function onlyPositive(arr) {
    let arrPos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arrPos.push(arr[i]);
        }
        else {
            break;
        }
    }
    return arrPos;

}

const arr = [45, 87, 96, 11, 63, -56, 71, 28];
const arrPos = onlyPositive(arr);
console.log(arrPos);

for (let x of arr) {
    console.log(x);
}
