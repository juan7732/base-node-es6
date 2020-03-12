import fetch from 'node-fetch';

console.log('It works!')

console.log('Just change the name of index.js for your script and you are ready to use the latest es6 features.')

fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', { method: 'GET'})
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));
