var input = document.getElementById("user-input");




function test(){
  alert("Yep");
  
}




/// User Input
  
function handle(e){
    var key = e.which;
    if (key == 13){
      alert(input.value);
      getInput();
    }
  }
  
function getInput() {
 var input = document.getElementById("user-input");
  
  document.body.style.backgroundColor= input.value;
  
  document.getElementById("User").innerHTML = input.value;
}
