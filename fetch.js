console.log(11111);
console.log(22222);
setTimeout(() => console.log('aaaaaaaaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(66666);
/* for (let i = 0; i < 100000; i++) {
    console.log(i);

} */