var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var clear = document.getElementById("clear");

button1.addEventListener("click", () => {
  var multiply = parseInt(document.getElementById("multiply").value);
  var multiply2 = parseInt(document.getElementById("multiply2").value);
  var answer = multiply * multiply2;
  var answerOnDom = document.createTextNode(answer);
  answer1.appendChild(answerOnDom);
})

clear.addEventListener("click", () => {
  var multiply = parseInt(document.getElementById("multiply").value);
  var multiply2 = parseInt(document.getElementById("multiply2").value);
  multiply.innerHTML = "";
  multiply2.value = "";
  alert("clicked")
})


