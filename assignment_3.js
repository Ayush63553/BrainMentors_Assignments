//Question 1) WAP to print area and perimeter of rectangle, taking input form the user, using prompt
var a=prompt("enter length")
var b=prompt("enter breath")

function rectangle(a,b) {
    console.log("Area of rectangle is :",a*b)
    console.log("Perimeter of rectangle is :",2(a+b))
}
//arrow function
rectangle=()=>{ 
    var a=parseFloat(prompt("enter length"))
    var b=parseFloat(prompt("enter breath"))
    console.log("Area of rectangle is :",a*b)
    console.log("Perimeter of rectangle is :",2*(a+b))
}
//anonymous function
function rectangle(){
    var a=parseFloat(prompt("enter length"))
    var b=parseFloat(prompt("enter breath"))
    var area=function(){
        return a*b
    }
    var perimeter=function(){
        return 2*(a+b)
    }
    return {area,perimeter}
}
rectangle().area()
rectangle().perimeter()
//Named expression functions
function rectangle(){
    var a=parseFloat(prompt("enter length"))
    var b=parseFloat(prompt("enter breath"))
    var area=function(){
        return a*b
    }
    var perimeter=function(){
        return 2*(a+b)
    }
    return [area,perimeter]
}
rectangle()[1]()
rectangle()[0]()
// Question 2) Do the same for question 4 and 5 from assignment 2
// Functions for Question 4 assignment 2
//Normal Function
function date(){
    const d= new Date()
    const d1=d.toLocaleTimeString("en-IN")
    const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log("Today is:",day[d.getDay()])
    var a="AM"
    var x=d.getHours()
    if(x>12){
        x=x-12;
        a="PM";
    }
    else if(x==12){
        a="PM"
    }
    else if(x==0){
        x=12;
    }
    console.log("Current Time is:", d.getHours(),a,":",d.getMinutes(),":",d.getSeconds())
}
//Arrow Function
date=()=>{
    const d= new Date()
    const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log("Today is:",day[d.getDay()])
    var a="AM"
    var x=d.getHours()
    if(x>12){
        x=x-12;
        a="PM";
    }
    else if(x==12){
        a="PM"
    }
    else if(x==0){
        x=12;
    }
    console.log("Current Time is:", d.getHours(),a,":",d.getMinutes(),":",d.getSeconds())
}
//Anonymous Function
function date(){
    const d= new Date()
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var day=function(){
         console.log("Today is:",days[d.getDay()])
    }
    var time= function(){
        var a="AM"
        var x=d.getHours()
        if(x>12){
            x=x-12;
            a="PM";
        }
        else if(x==12){
            a="PM"
        }
        else if(x==0){
            x=12;
        }
        console.log("Current Time is:", d.getHours(),a,":",d.getMinutes(),":",d.getSeconds())
    }
    return {day,time}
}
//Named Expression Function
function date(){
    const d= new Date()
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var day=function day(){
         console.log("Today is:",days[d.getDay()])
    }
    var time= function time(){
        var a="AM"
        var x=d.getHours()
        if(x>12){
            x=x-12;
            a="PM";
        }
        else if(x==12){
            a="PM"
        }
        else if(x==0){
            x=12;
        }
        console.log("Current Time is:", d.getHours(),a,":",d.getMinutes(),":",d.getSeconds())
    }
    return {day,time}
}

//Functions for question 5 assignment 2
//Normal Question
function datef()
{
    const d= new Date()
    dd=d.getDate()
    mm=d.getMonth()
    yy=d.getFullYear()
    console.log(`${mm}-${dd}-${yy}`)
}
//Anonymous Functions
function datef()
{
    const d= new Date()
    var df=function(){
        dd=d.getDate()
        mm=d.getMonth()
        yy=d.getFullYear()
        console.log(`${mm}-${dd}-${yy}`)
    }
}
//Named Expression Function
function datef()
{
    const d= new Date()
    var df=function df(){
        dd=d.getDate()
        mm=d.getMonth()
        yy=d.getFullYear()
        console.log(`${mm}-${dd}-${yy}`)
    }
    return df
}
//Arrow Function
datef=()=>
{
    const d= new Date()
    dd=d.getDate()
    mm=d.getMonth()
    yy=d.getFullYear()
    console.log(`${mm}-${dd}-${yy}`)
    return df
}
