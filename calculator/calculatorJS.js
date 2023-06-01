function calculate() {

    validate();

  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  var operationValue = document.querySelector('input[name="operation"]:checked').value;

  var result;

  if (operationValue == "addition") {
    result = num1 + num2;
  } else if (operationValue == "subtraction") {
    result = num1 - num2;
  } else if (operationValue == "multiplication") {
    result = num1 * num2;
  } else if (operationValue == "division") {
    result = num1 / num2;
  }

  document.getElementById("result").innerHTML = '<div class="m-3 text-success fw-bold fs-4">Result: ' + result + '</div>';
}

function validate(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

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