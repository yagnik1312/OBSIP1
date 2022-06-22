 function clearScreen() {
    document.getElementById("result").value = "";
}
function display(num) {
    document.getElementById("result").value += num;
}

function calculate() {
    var string = document.getElementById("result").value;
    var calculate = eval(string);
    document.getElementById("result").value = calculate;
}
function remove(){
 var str = document.getElementById("result").value
    
  var re =  str.slice(0,-1 );
    
    document.getElementById("result").value = re;
}