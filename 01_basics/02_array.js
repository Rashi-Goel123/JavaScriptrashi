const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batsman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// concat
//  const allarray = marvel_heros.concat(dc_heros)
// console.log(allarray);
const allnewheroes = [...marvel_heros,...dc_heros]//spread opetrator
console.log(allnewheroes);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)