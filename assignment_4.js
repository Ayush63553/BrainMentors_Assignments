//Question 1
var t=arr.reduce((sum,e)=>e>10000?sum++:sum,0);
console.log(t)

//Question 2
var t1=arr.reduce((a,b)=>Math.max(a,b))
console.log(t1)

//Question 3
var t2=arr.reduce((sum,e)=>e>10000?++sum:sum,0)
console.log(t2)

//Question 4
var obj1={salary:10000,name:"Ayush"}
var obj2={salary:1000,name:"aman"}
var obj3={salary:20000,name:"sambhav"}
var obj4={salary:25000,name:"Yuvraj"}
var arrO=[obj1,obj2,obj3,obj4]
//Sorting by salary
console.log(arrO.sort((a,b)=>a.salary-b.salary)
//Sorting By Name
console.log(arrO.sort((a,b)=>(a.name).localeCompare(b.name)))

//Question 5
const map1=arr.map(x=>x*0.9)
console.log(map1)
