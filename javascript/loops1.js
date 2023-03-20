let nameList=['saru' ,'shraddha','rutuja','tanuja','veera' ];
let nameList1=[];

for( let i of nameList){
nameList1.push(i);
   
}
console.log(nameList1);
//console.log(i);

let student={
    name:'shraddha',
    surname: 'jogade',
    age:20,
    car : 'audi',
}
console.log(student.name);
for(let i in student)
 //console.log(i);
 //if(objkey == 'car'){
  //let car =  student[objkey]
  //console.log(car);
//}
console.log(student[i]);

let no=20;
while(no>10)
no--;
console.log(no);

let no1=10;
do{
    console.log(no1);
    no1++;
}
while(no1>15);
