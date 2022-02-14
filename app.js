// function phone event handle
function updateProduct(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-input");
  let inputNumber = productInput.value;
  if (isIncreasing) {
    inputNumber = parseInt(inputNumber) + 1;
  } else if (inputNumber > 0) {
    inputNumber = parseInt(inputNumber) - 1;
  }
  productInput.value = inputNumber;
  // update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = inputNumber * price;

  //calculate total
  calculateTotal();
}

// phone increase decrease event
const phoneUp = document.getElementById("phone-up");
phoneUp.addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});

const phoneDown = document.getElementById("phone-down");
phoneDown.addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});

// case increase decrease event
const caseUp = document.getElementById("case-up");
caseUp.addEventListener("click", function () {
  updateProduct("case", 59, true);
});

const caseDown = document.getElementById("case-down");
caseDown.addEventListener("click", function () {
  updateProduct("case", 59, false);
});

// get input total
function inputTotal(product) {
  const inputNumber = document.getElementById(product + "-input");
  const inputValue = parseInt(inputNumber.value);
  return inputValue;
}

// calculate total

function calculateTotal() {
  const phoneTotal = inputTotal("phone") * 1219;
  const caseTotal = inputTotal("case") * 59;

  const subtotal = phoneTotal + caseTotal;
  document.getElementById("subtotal").innerText = subtotal;
  const tax = subtotal / 10;
  document.getElementById("tax").innerText = tax;
  const grandTotal = subtotal + tax;
  document.getElementById("grand-total").innerText = grandTotal;
}
