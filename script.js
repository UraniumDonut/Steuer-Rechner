/* divide input from id=income by 12 and set p with id result to that value */
function calculate() {
    var income = document.getElementById("income-number").value;
    var govexpense = document.getElementById("gov-expense-number").value;
    var result = govexpense / 46000000;
    document.getElementById("result").innerHTML = result;
}
