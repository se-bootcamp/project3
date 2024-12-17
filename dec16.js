alert('test');


// JSON DATATYPE:
// STRING,NUMBER, BOOLEAN, NULL, ARRAY, OBJECT

// JSON.parse();
// JSON.stringify();


// const stu1={
//  firstName:'Peter',
//  lastName:'Smith',
//  score:[100,99,90]

// } 
// stu1.firstName


let userScore=[100,99,90];
console.log(userScore);
let userScore2= new Array(100,99,90);
console.log(userScore2);
userScore2.push(98);
console.log(userScore2);






document.querySelector('button').addEventListener('click',function(){

    let myRequest=new XMLHttpRequest();
    let urlISSS='https://api.wheretheiss.at/v1/satellites/25544';
    
    myRequest.open('GET',urlISSS);
    
    
    // const showInfo=function(){}
    myRequest.onload=function(){
         let mydata=myRequest.responseText;
         console.log(mydata);
         let myDataJS=JSON.parse(mydata);
         console.log(myDataJS);        
         document.querySelector('.alt').textContent=String(myDataJS.altitude)
         document.querySelector('.lat').textContent=String(myDataJS.latitude)
         document.querySelector('.lon').textContent=String(myDataJS.longitude)
    }
    
    myRequest.send();


})