//Question 2
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
