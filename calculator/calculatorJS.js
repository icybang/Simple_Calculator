
///////////////////////////////////////////////////////////////

function calculate() {

  validate();

  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var operator1 = document.getElementById("operator1").value;
  var operator2 = document.getElementById("operator2").value;

  var expression = num1 + operator1 + num2 + operator2 + num3;
  var result = eval(expression);

  document.getElementById("result").innerHTML = '<div class="m-3 text-success fw-bold fs-4">Result: ' + result + "</div>";
}

////////////////////////////////////////////////////////////

function validate(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var operator1 = document.getElementById("operator1").value;
    var operator2 = document.getElementById("operator1").value;
    
    if (operator1 === "") {
      document.getElementById("op1Er").innerHTML="Please select operator";
    } else{
      document.getElementById("op1Er").innerHTML="";
    }

    if (operator2 === "") {
      document.getElementById("op2Er").innerHTML="Please select operator";
    } else{
      document.getElementById("op2Er").innerHTML="";
    }

    if (isNaN(num1)){
    document.getElementById("num1Er").innerHTML="Please Enter a Valid Number"
    } else document.getElementById("num1Er").innerHTML="";

    if (isNaN(num2)){
    document.getElementById("num2Er").innerHTML="Please Enter a Valid Number"
    } else document.getElementById("num2Er").innerHTML="";

    if (isNaN(num3)){
      document.getElementById("num3Er").innerHTML="Please Enter a Valid Number"
      } else document.getElementById("num3Er").innerHTML="";

}