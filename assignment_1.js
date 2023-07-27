// //Arguments
// function one(){
//     return 1;
// }

// function add(){
//     var a=0;
//     for(var i=0;i<arguments.length;i++){
//         if(typeof arguments[i] =="function"){
//             if(isNaN(parseFloat(arguments[i]()))==false){
//                 a=a+parseFloat(arguments[i]());
//                 // console.log("it is a function");
//             }
//             else{continue;}
//         }
//         else if(arguments[i] instanceof Array){
//             for(var j=0; j< arguments[i].length ; j++){
//                 if(typeof arguments[i][j] =="function"){
//                     if(isNaN(parseFloat(arguments[i][j]()))==false){
//                         a=a+parseFloat(arguments[i][j]());
//                         // console.log("it is a function");
//                     }
//                 }
//                 else if(isNaN(parseFloat(arguments[i][j]))==false){
//                     a=a+parseFloat(arguments[i][j]);
//                 }
//             }    
            
//         }
        
//         else if(isNaN(parseFloat(arguments[i]))==false){
//             a=a+parseFloat(arguments[i]);
//         }

//         else{continue;}
//     }
//     return a;
// }
// function two(){return "2"}
// console.log(add(10,20,[10,20,30,one,NaN,"ten"],"two",NaN,"10","20",["10","20","30"],one,two));

// better optimized code
//ARGUMENTS 
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