function doSomething() {
    console.log('I am coding javaScript');
}
console.log('first: I am a first boy');
doSomething(setTimeout(function () {
    console.log('Hello! everyone');
}, 7000));
console.log('second: I am a second boy');
setTimeout(function () {
    console.log('finally: I am coding javaScript')
}, 5000);
setTimeout(function () {
    console.log('Finally: I am tired');
}, 6000)
setTimeout(() => {
    console.log('hello')
}, 4000)
setTimeout(() => {
    console.log('hello coding')
}, 10000)
// setTimeout(() => { }, 4000);
console.log('third: I am third boy');