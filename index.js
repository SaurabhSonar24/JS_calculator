
 function display(input) {
    document.getElementById("output").value += input;
   }
function add(){
    var v3=v1+v2;
}
function eql(){
    var res=document.getElementById("output").value;
    var fres=eval(res);
    document.getElementById("output").value=fres;
    document.getElementById("hist").value+="\n"+res+"="+fres+"\n"

    // history();
}
function CLS() {
    document.getElementById("output").value = "";
   }
   function reset() {
    document.getElementById("hist").value = "";
   }
