function doSomething() {
    console.log('I am coding javaScript');
}
console.log('First: I am first');
console.log('Second: I am second');
setTimeout(doSomething, 5000);
setTimeout(function () {
    console.log('This is my practice session')
}, 6000)
console.log('Third: I am third');
setTimeout(() => {
    console.log('I am arrow function');
}, 7000)