/*var collection ={
 "2548": {
     "album": "slippery when wet",
     "artist": "Boni Jovi",
     "tracks": [
         "Let it Rock",
         "You Give Love a Bad Name"
     ]

    },
 "2468":{
    "album": "1999",
    "artist": "Prince",
    "tracks": [
        "1999",
        "Little Red Corvette"
    ]

        },

 "1245":{
    "artist": "Robert Palmer",
    "tracks": []
         },
 "5439":{
     "album": "ABBA Gold"
         }

};
 // code to save the copy of the initial records.
 collectionCopy = JSON.parse(JSON.stringify(collection));

 /* we are creating function that update the above object
   where it will be able to add new value, change or delete the existing data.*/
  /* function updateCollection(id, prop, value){
       // will delete prop if provided value is empty.
       if (value === ""){
           delete collection[id][prop];
       }
       else if (prop === "tracks"){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
       }
       else{
           collection[id][prop] = value;
       }
       return collection;
   }
   var abbaTracks = ["go","get", "them"];
     updateCollection(5439,"artist", "ABBA");
     updateCollection(5439,"tracks", abbaTracks);
  console.log(updateCollection("2468","artist","jovan"));
  */

/* var myData=[5,7,8,9,6,13];
 var mytotal=0;
  
 for(var i= 0; i < myData.length; i++)
 {
     mytotal += myData[i];
 }
 console.log(mytotal); */

 /*function multiplyAll(arr){
     var product = 1;
     for(var i= 0; i< arr.length; i++){
         for(var j =0; j< arr[i].length; j++){
            product *=arr[i][j];
         }
     }


     return product;
 }
  var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
    console.log(product); 

    var contacts = [{
        "firstName" : "Niyogisubizo",
        "lastName": "Johovanis",
        "number": "0783430138",
        "likes": ["eating","drinking","making friends"]
    },
    {
        "firstName" : "butera",
        "lastName": "herve",
        "number": "0788501644",
        "likes": ["programming","drinking","nyash"]
    },
    {
        "firstName" : "Ishimwe",
        "lastName": "Richard",
        "number": "0780417287",
        "likes": ["electronics","billiards","sports"]
    },
    {
        "firstName" : "mutabazi",
        "lastName": "patrick",
        "number": "078010452",
        "likes": ["music","eating","fame", "babes"]
    }
];
*/

// function to retrieve the value when name and property are provided.

/* function  lookUpProfile(name, pro){
    for(var i=0; i< contacts.length; i++){
        if(contacts[i].number === name)
        {
            return contacts[i][pro] || "No such property";
        }      
    }
    return "No matching contact";
}
 var myValue = lookUpProfile("0783030138","firstName");

 console.log(myValue); */


 // generating the random function by built-in function random () 

/*  function  randomfunction(){

    return Math.random();
 }
  console.log(randomfunction()); */

  // generating a random whole number 
  /* var randomWholeNumberBetween1_20 = Math.floor(Math.random()*20);
   function randomWholeNumber(){
     
   return Math.floor(Math.random()*10);;

   }
   console.log(randomWholeNumber()); */
     
   // generating a whole number within a range.
   
   /* function ourRandomRange(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;
   }
   var randomWholeNumber =  ourRandomRange(7,56);
    console.log(randomWholeNumber); */
    // use the parseInt function which takes a string and return an integer.
    
    /* function convertToNumber(str){
        return parseInt(str);
    }
    console.log(convertToNumber(" nuts 46")); */

    // use the parseInt function with Radix(specify the base of the number in the string)
    /*
    function convertToNumber(str){
        return parseInt(str ,);
    }
     console.log(convertToNumber("1010111")); */

     // tenary operator and multiple tenary operator . condition? statement if-true: statement if -false
     /* function checkAb(a){
         return a>0? "positive": a<0? "negative":"zero";
     }
     console.log(checkAb(0)); */
    
     // difference between var and let which can be use to declare variable, also const can be used
     // var can be used to declare the same variable twice in the same scope while it's an error using let, for let you don't need to write let keyword again;
     // var name ="jehovans";
     // var age= 20;
     // var name =" kellen"

     // let name ="jehovans";
     // let age= 20;
      //   name ="kellen"
     //console.log(name);
      //console.log(age);
     // "use strict" statement which enables strict mode to catch the common coding mistakes & unsafe actions, mostly used at the top in for and in function  
     // checking the scope of var and let keywords, let has a block scope 
     /* function checkScope(){
           "use strict";
            let i = "function scope";
           if(true){
              let i = "block scope";
               console.log("block scope is: ", i);
           } 
           console.log("function scope is:  ", i);
           return i;
     }
      checkScope();  */
   // Const a read-only keyword you can not re-assign it;
   /*function readOnly(sentnc){
             "use strict";

             const STRINGO = sentnc + " was genius";
                 // stringo = sentnc + " was an intel";
            for(let i=0; i<sentnc.length; i+=3 )  {
                console.log(STRINGO);
            }   
   } 
   readOnly("Niyogisubizo ");*/
   // Mutate an Array declared with the CONST
  
  /*
   const arr= [54,6,34,32];
  
   function mutate(){
      // arr =[32,34,6,54]; // do not work
      // arr[0]=32;  // works
       // arr[3]=54;// workssd
   }
   mutate();
console.log(arr);  */

// prevent object mutation by using object.freeze(), and restrict  try_catch broke.
 
/*
function freezeObj(){
     const MATH_CONSTANT ={
         PI : 3.14
     }
        Object.freeze(MATH_CONSTANT);

     try {
         MATH_CONSTANT.PI = 20;
     }
     catch(error){
         console.log(error);
     }
     return MATH_CONSTANT.PI;
 }
  const tin = freezeObj();
  console.log(tin);
  */

  // use arrow functions to write concise anonymous functions.

 /* const magic = () => new Date();
  console.log(magic);*/
  // arrow function with arguments
    /* var myconcat = (arr1,arr2) => arr1.concat(arr2);
     
    
   console.log(myconcat([2,3,4],[4,6,8])); */ 


   // writing the  higher order arrow function. such as Map, filter and reduce
   // when a function takes another function as an argument it's good to use arrow function 

  /* example one  
  
  var c = () => console.log("Hello jehovan"); 
   var d= c();
   console.log(d); 
   // example two

   const myArray = [2,4,3.4,-10,5.2,4,16,-2];
    const squaredList = (arr) => {
        const squaredArray = arr.filter(num => Number.isInteger(num) && num> 0).map(x => x*x);
        return squaredArray;
    }

    const squaredArray = squaredList(myArray);
    console.log(squaredArray);
   */

    // continuation. by setting default value for a parameters to used in case it wasn't declared.
     // this example show how a function is an argument of itself as a function(function parameters)
     /*
     const magicNumber = (function (){
      return function magicNumber(num1,num2 = 1){
          return num1 + num2;
      };
     }) 
     ();
     console.log(magicNumber(3,6));
     console.log(magicNumber(7));
     */

     // using Rest operator with  Function parameters.
     // Rest operator allows you to create a function that takes a variable number of arguments.
     // Rest operator are dots.

     // without rest operator
    
     /* const sum =( 
         function(){
         return function sum(x,y,z){
             const args = [x,y,z];
             return args.reduce((a,b)=> a+b,0);
         };
     }

     )
     ();
     console.log(sum(1,3,5));
     
     // with rest operator
     
     const mySum = (
         function (){
             return function mySum(...args) {
                 return args.reduce((a,b)=> a+b,0);
             };
         }
     )

    ();
     console.log(mySum(4,4));

*/

// using the spread operator  to evaluate the arrays in-place
// spread operator works the same as rest operator (...)

      // without spread operator
 /* var arr1 = ['love', 'the', 'life','you','live'];
var arr2;
 (
     function (){
         arr2=arr1;
         arr1[0]='live'
         arr1[4]= 'love'
     }
 )
 ();
  console.log(arr2);// this will output the array with the changes applied [live the life you love].

     // with spread operator
  const arr1 = ['love', 'the', 'life','you','live'];   
  let arr2;
  (
      function (){
          arr2=[...arr1];
          arr1[0]='live'
          arr1[4]= 'love'
      }
  )
  ();
   console.log(arr2); // this will preserve the initial array output [love the life you live]

 

// using the destructuring assignments to assign variables from an Object
// destructuring assignments with nested objects
const AVG_TEMPERATURES = {
    today : 67,
    tommorow : {min:79.3, max: 85}
}
function getTempOfTmrw(avgTemperature){
    "use strict";
    
    const {tommorow :{ max: tempOfTomorrow}}= avgTemperature;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));    

// destructuring within an array
 
const [x,z,,,y] = [1,3,4,5,43,7];
  console.log(x,z,y);
  let a=5, b=6;
  (()=>{
    [a,b] = [b,a]; 
  })
  ();
  console.log(a,b);            


// destructuring with rest operator

const source = [1,2,3,4,5,6,7,8,9];

function remove2_5(list){

    let [a,,,...arr] = list;
    return arr;
}

console.log(remove2_5(source));      

// use destructuring assignment to pass an object as a function's parameter.
const stats = {
 math : 34,
 hci: 43,
 os: 50,
 gis: 45,
 db: 32
}

const average = ( function () {
        return  function average({math,gis}){
        return (math + gis)/2;
    };
})
();


console.log(average(stats));         */


// creating strings using template literals  use of BACK TICK (``)
 
// example 1
/*
let person ={
    name : "jehovanis",
    age : 20
}

let greeting = `hello my name is ${person.name} and I am ${person.age} years old`;
 console.log(greeting);

 // example two 

 let result = {
     success : ["average > 80","all lesson >70", "good displine"],
     failure :["no pass", "<50 in 3 lessons", "repeated"],
     mid :["retake","<50 in 2 lessons or less","pass"] 
 }

 function checkResult(arr){
     const resultList=[];
     for (let i=0; i<arr.length; i++){
       resultList.push(`<li class="text-warning">${arr[i]}</li>`)   
     }
     return resultList;
 }
 console.log(checkResult(result.mid));  

 // write consise declarative functions 
  
 // an Object can contain a function
 // can be used to change the value of any property inside the object
 var bicycle = {
     gear: 2,
     setGear(newGear){
         this.gear = newGear;
     }
 }
  bicycle.setGear(5);
  console.log(bicycle.gear);
  

  // using the Class syntax to define a constructor function
  //CLASS KEY WORDS CAN BE USED TO CREATE AN OBJECT. and NEW keyword
   example 1
  class bicycle{
      constructor (newGear,tyres){
          this.newGear = newGear; 
          this.tyres= tyres;

      }
  }
   
   var gear = new bicycle(2,5);
   
   console.log(gear.newGear,gear.tyres);       output 2 and 5   

//  example 2 
// constructor must have the same name as the class
 function makeClass(){
     class vegetable{
         constructor(name){
             this.name=name;
         }
     }
     return vegetable;
 }
  const vegetable = makeClass();
 const carrot = new vegetable("carrot leaves");
 console.log(carrot.name);                        

 // using getters and setters to control access to an object.
 // (this) means that the following variable is accessible within that class
 // _insideClass the variable with underscore is only accessed inside the class
 //
 
 function makeClass(){
      class whatsapp{
          constructor(message){
              this._message = message;
          }
          get repliedMessage(){
              return this._message;
          }
          set repliedMessage(reply){
              this._message=reply;
              
          }
      }
      return whatsapp;
 }
 
 const whatsapp= makeClass();
 const inserted = new whatsapp("hi");
 let message = inserted.repliedMessage;
 inserted.repliedMessage= "hello";
 message = inserted.repliedMessage;
  console.log(message);                       


  // Importing and exporting
   import { capitalizedIt } from "refer";
  
  const cap = capitalizedIt("ariko noneho nashonje");
  console.log(cap);                                    

  var money = prompt("how much money you got");
   document.getElementById("them").innerHTML=money;*/
   function main(){
       var distance = parseInt(readline(),10);
       var result = (distance/40)*60;
       console.log(result);
   }
  main();





 




  
   




   
















   
