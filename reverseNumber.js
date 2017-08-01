function reverse(n) {

    for(var r = 0; n; n = Math.floor(n / 10)) {
        r *= 10;
        r += n % 10;
    }
    return r;
}

console.log(reverse(123));
