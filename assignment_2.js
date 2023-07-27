//Question 1(Using Arguments)
function add(){
    var a=0;
    for(var i=0;i<arguments.length;i++){
        if(typeof arguments[i] =="function"){
            isNaN(parseFloat(arguments[i]()))?a:a=a+parseFloat(arguments[i]());
        }
        else if(arguments[i] instanceof Array){
            for(var j=0; j< arguments[i].length ; j++){
                if(typeof arguments[i][j] =="function"){
                    isNaN(parseFloat(arguments[i][j]()))?a:a+=parseFloat(arguments[i][j]());
                }
                else if(isNaN(parseFloat(arguments[i][j]))?a:a+=parseFloat(arguments[i][j]));
            }    
            
        }
        else if(isNaN(parseFloat(arguments[i]))?a:a+=parseFloat(arguments[i]));
    }
    return a;
}
function one(){return 1;}
function two(){return "2"}
console.log(add(10,20,[10,20,30,one,NaN,"ten"],"two",NaN,"10","20",["10","20","30"],one,two));

//Question 2(Using Rest Arguments)
function add(...args){
    var a=0;
    for(var i=0;i<args.length;i++){
        if(typeof args[i] =="function"){
            isNaN(parseFloat(args[i]()))?a:a+=parseFloat(args[i]());
        }
        else if(args[i] instanceof Array){
            for(var j=0; j< args[i].length ; j++){
                if(typeof args[i][j] =="function"){
                    isNaN(parseFloat(args[i][j]()))?a:a+=parseFloat(args[i][j]());
                    }
                else if(isNaN(parseFloat(args[i][j]))?a:a+=parseFloat(args[i][j]));
            }    
        }
        else if(isNaN(parseFloat(args[i]))?a:a+=parseFloat(args[i]));
    }
    return a;
}

function one(){return 1;}
function two(){return "2"}

console.log(add(10,20,[10,20,30,one,NaN,"ten"],"two",NaN,"10","20",["10","20","30"],one,two,100));

//Question 3
//rest(Done in previous question)
//Spread
var arr=[10,20,30,40]
var arr1=[100,200,300,400]
var arr2=[...arr,...arr1]
console.log(arr2);

//Question 4
const d = new Date()
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is:", day[d.getDay()])
var a = "AM"
var x = d.getHours()
if (x > 12) {
    x = x - 12;
    a = "PM";
}
else if (x == 12) {
    a = "PM"
}
else if (x == 0) {
    x = 12;
}
console.log("Current Time is:", d.getHours(), a, ":", d.getMinutes(), ":", d.getSeconds())

//question 5
dd = d.getDate()
mm = d.getMonth()
yy = d.getFullYear()
console.log(`${mm}-${dd}-${yy}`)

