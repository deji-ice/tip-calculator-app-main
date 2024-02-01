const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twenty = document.getElementById("twenty");
const fifty = document.getElementById("fifty");

function tip_Calc(value) {
//   if (isNaN(bill.value) || isNaN(people.value) || isNaN(custom.value)) {
//     alert(
//       "Invalid input. Please enter valid positive numeric values for Bill and People"
//     );
//     return;
//   }
  console.log(value);
  const percent = value / 100;
  const billAmount = bill.value / people.value;
  const tipPerPerson = billAmount * percent;
  const billAmountPerson = tipPerPerson + billAmount;
  if (
    tipPerPerson &&
    billAmountPerson &&
    percent &&
    bill.value &&
    people.value
  ) {
    reset.removeAttribute("disabled");
  }
  tip.textContent = tipPerPerson.toFixed(2);
  total.textContent = billAmountPerson.toFixed(2);
  console.log(tip.textContent);

  return billAmountPerson.toFixed(2);
}

bill.addEventListener("change", function () {
  console.log("bill:", bill.value);
});
people.addEventListener("change", function () {
  console.log("people:", people.value);
});
custom.addEventListener("change", function () {
  tip_Calc(custom.value);
});

// five.addEventListener("click", function(){
//     tip_Calc(15)
// });
ten.addEventListener("click", function () {
  tip_Calc(10);
});

reset.addEventListener( 'click', function() {
  bill.value=''
  people.value=''
  custom.value=''
  tip.textContent = '0.00';
  total.textContent = '0.00';
})
// fifteen.addEventListener("click", tip_Calc(15));
// twenty.addEventListener("click", tip_Calc(25));
// fifty.addEventListener("click", tip_Calc(50));
