/*// export const capitalizedIt = (str) => str.toUpperCase();
 function greeting(yourName){
     var _result = "hello" + " " + yourName;
     return _result;

 }
   var element = Document.createElement('h2');
   element.textContent="inserted element with Javascript.";
   Document.body.appendChild(element);
  // var name = prompt("what is your name");
  // console.log(greeting(name));
  console.log(Document.body);*/
  function getAgeInDays(){
    var yourAge= prompt("what's your birth year friend?");
    var yourAgeInDays = (2022-yourAge)*365;
    var p= document.createElement("p");
    var textAnswer= document.createTextNode("you are " + yourAgeInDays + " days old.");
    p.setAttribute("id","yourAgeInDays");
    p.appendChild(textAnswer);

    var div=document.getElementById("flex-box-result");
    div.appendChild(p);
    
  }
  function reset(){
    document.getElementById('yourAgeInDays').remove();
  }
  function photoGenerator(){
    var image= document.createElement('img');
    var div = document.getElementById('flex-gen-photo');
    image.src="amafoto/diana silvers.jpg";
    image.setAttribute("id", "myImage");
    
    div.appendChild(image);
  }
  function removePhoto(){
       document.getElementById("myImage").remove();  
  }

