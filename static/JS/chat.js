alert("chat.js is activated");




function test(){
  alert("Yep");
  
}




/// User Input
  
function handle(e){
    var key = e.which;
    if (key == 13){
      alert("_____HELLO  YOUR INPUT WORKS BUT THIS CODE IS A WORKING PROGRESS SORRY =[ ___________");
      getInput();
    }
  }
  
  function getInput(){
    // Gets Users Input
    var input = document.getElementById("user-input");
    document.body.style.background  = input.value;
  }
