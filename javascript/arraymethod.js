let myrange=[20,30,40,50,60,70,80,90];
console.log(myrange.length);
 console.log(myrange.toString());

let lastId= myrange.length- 1;
console.log(lastId);
delete myrange[7];
console.log(myrange);
let myRange1=myrange[7]
console.log(typeof(myRange1));

let joined=myrange.join('//')
console.log(joined);

console.log(myrange.pop());
console.log(myrange.shift());
//console.log(myrange);
myrange.push('22');
 console.log(myrange);

 myrange.unshift('shraddha',22);
 console.log(myrange);
 myrange[3]=500;
 console.log('----->',myrange);

myrange.splice(2,5,66,77)
 console.log(myrange);
 num1=[20,30,40,50];
 num2=[200,300,400];
 console.log(num2.concat(num1));
 //console.log(num1+' '+num2);

 console.log(num1.slice(2));
 console.log(num2.reverse());
 let a =['a','bc','abd','ad'];
 console.log(a.sort());