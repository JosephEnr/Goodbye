function start(){
  alert("You da best");
}
function fav(){
  var quest = prompt("Whos your favorite student?");
  var favs = ("Joseph") ;
  if(quest == favs){
    document.getElementById("answer").innerHTML="Correct!!!";
  }
  else{
    document.getElementById("answer").innerHTML="Woops wrong answer";
  }
}
