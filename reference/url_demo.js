const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toJSON());

console.log(myUrl.searchParams);

myUrl.searchParams.append('abc', 123)

console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));