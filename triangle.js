function triangleArea(a, b, c) {
    const area = (1 / 4) * Math.sqrt((4 * Math.pow(a, 2) * Math.pow(b, 2))
        - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)), 2));
    return area;
}

console.log(Math.round(triangleArea(5, 10, 11.18)));