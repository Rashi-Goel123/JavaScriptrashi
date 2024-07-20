const name = "rashi"
const repocount=50
// console.log(name+repocount+"value")
console.log('hello my name is ${name} and my repo count is ${repocount}');
const gamename = new String('rashi')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));
//string method 
const newstring = gamename.substring(0,4)
console.log(newstring);
const anotherstring = gamename.slice(-1,0)
console.log(anotherstring);
const newstring1 = " rashi "
console.log(newstring1);
console.log(newstring1.trim());
// trim javascript
const url="https://rashi.com/rashi%20goel"
console.log(url.replace('%20','_'));
console.log(url.includes('rashi'));
console.log(gamename.split('_'));





