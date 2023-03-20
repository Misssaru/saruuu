let myfirstlist = 'shraddha'

//let mynamelist=[] //empty array
 
let mynamelist=['preeti','shraddha','rutuja','saya', 40,50,100,test()]
function test(){
var result="shraddha"
return result;
}
console.log('mynamelist',mynamelist);
console.log(mynamelist [0]);
console.log(mynamelist [1]);
console.log(mynamelist [10]);
console.log(mynamelist [2]);
console.log(mynamelist.length);

//let student{}//emp obj

let student = {
    name : 'shraddha',
    class : 12,
    age : 18,
    
}
console.log(student);
console.log(student.age);

let teacher={
    name : 'shraddha',
    id: 26,
    age: 30,

}
console.log(teacher);
console.log(teacher.id)

//just tryle function
// function myfirstfun(){
//     let test='shraddha'
//     if(true){
//         var b ='word'
//         console.log(b)
//     }
//     console.log(b)
//}

//myfirstfun()

 let employee  = [
{

    name : 'shraddha',
    age:20,
},
{

    name: 'rutu',
    age:10,

},
{
    name : 'saya',
    age : 30,

}
]
console.log(employee);
console.log(employee[1].name);
console.log(employee[0].name);

let list =[
    ['ppp','sss'],
    ['pppp','sshhs',['ppppp','pooo']],
    ['sss','sssss'],
]
console.log(list);
console.log(list[0][1]);
console.log(list[1][2][0]);
console.log(list[2][1]);

var obj = {
    "posts": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "some comment",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    },
    "status": "succsess"
  }
  console.log(obj.posts[0].author)

  //data types in js
// string
// number
// boolean
// object
// null
// undefined
var car = '-null i am poonam'; //'true' , -9.0 ,90,-0
console.log(typeof(car));
console.log(typeof(20+40+'poonam'+20));

