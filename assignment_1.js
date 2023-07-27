//Question 6
function prime(a){
    for(var i=2;i<=a;i++){
        if(a%i!=0){continue;}
        else{return "Not Prime";}
    }
    if(a==1){return "Not Prime";}
    return "prime";
}
//Question 7
function arm(a){
    var b;
    var temp=a;
    var sum=0;
    var count=0;
    while(temp>0){
        temp=parseInt(temp/10);
        count++;
    }
    temp=a;
    for(var i=0;i<=count;i++){
        b=temp%10;
        sum=sum+b**count;
        temp=parseInt(temp/10);
    }
    if(sum==a){return true}
    else{return false}
}
//Question 8

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
