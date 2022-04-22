console.log('first');
console.log('second');
let seconds = 0;
const timeZone = setInterval(() => {
    // seconds++
    if (seconds > 9) {
        clearInterval(timeZone);
    }
    // console.log(seconds++);
    console.log(++seconds);
}, 1000);