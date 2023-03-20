var emp = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
]
var age =emp.filter(ele=>{
return ele.age>=50
})
console.log('age',age);

var  sal=emp.filter(ele=>{
    return ele.sal>=30000
})
console.log('name',sal);


var number=[20,30,40,50,60];
let number2=[];
number.forEach(ele=>{
    number2.push(ele);

})
console.log(number2);

let num1=[];
number.forEach(ele => {
   if(ele!=40){
    num1.push(ele);
   }
})
console.log(num1);


 function test(){
let result=20+30;
return result;

}
console.log(test());
    
function add(a,b){
return a+b;
}
console.log(add(30,30));

var add1=(a,b)=>{
    return a+b;
}
console.log(add1(30,20));
