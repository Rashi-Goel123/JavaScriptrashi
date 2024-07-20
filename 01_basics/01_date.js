// let myDate = new Date();
// console.log(myDate.toString());//date and time
// console.log(myDate.toDateString());//date
// console.log(myDate.toLocaleString());//in humar readable format 
// console.log(typeof myDate);
// let mycreateDate = new Date(2023,0,23)
// console.log(mycreateDate.toDateString());
// console.log(mycreateDate.tolocaleString());
let myCreateDate = new Date("2023-01-14");
// console.log(myCreateDate.toLocaleString());
let myTimeStamp =  Date.now()
// console.log(myTimeStamp); 
//  console.log(myCreateDate.getTime());
 // timestamp use in quizes,
 console.log(Math.round(Date.now()/1000));
 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());
 //${newDate.getDay()}
 newDate.toLocaleString('default',{
    Weekday:"long"
 })  ///control space key use to get various methods