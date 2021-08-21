//  access the memory  button 
// 8 GB Unified memory
document.getElementById('default-memory').addEventListener('click', function () {
    getProductPrice('memory-cost', '0');
    decreamentTotal('memory-cost');
    increaseTotal();
    gettotalAmount();

});

// 16 GB Unified memory

document.getElementById('extera-memory').addEventListener('click', function () {
    getProductPrice('memory-cost', '180');
    decreamentTotal('memory-cost')
    increaseTotal();
    gettotalAmount();

});

// 256 gb ssd storage 

document.getElementById('default-storage').addEventListener('click', function () {
    getProductPrice('storage-cost', '0');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount();

});
// 512gb ssd storage 

document.getElementById('medium-storage').addEventListener('click', function () {
    getProductPrice('storage-cost', '100');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount()

});
// 1 tb ssd storage 

document.getElementById('extra-storage').addEventListener('click', function () {
    getProductPrice('storage-cost', '180');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount()
});


/* delivery free btn */

document.getElementById('delivery-free').addEventListener('click', function () {
    getProductPrice('delivery-input', "0");
    decreamentTotal('delivery-input');
    increaseTotal();
    gettotalAmount()

});
// delivary cost btn

document.getElementById('delivery-cost').addEventListener('click', function () {
    getProductPrice('delivery-input', "20");
    increaseTotal();
    gettotalAmount()

});

/* get memory storage  and delovery cost add function */
function getProductPrice(input, price) {
    const productInput = document.getElementById(input);
    const productCost = parseFloat(productInput.innerText);
    return productInput.innerText = price;
};

// increment total function 
function increaseTotal() {
    const memoryCost = document.getElementById('memory-cost');
    const memoryInnertext = parseFloat(memoryCost.innerText)
    const strogeCost = document.getElementById('storage-cost');
    const storegeInnertext = parseFloat(strogeCost.innerText);
    const deliveryField = document.getElementById('delivery-input');
    const deliveryInnertext = parseFloat(deliveryField.innerText);
    const bestPrice = document.getElementById('best-price')
    const bastPriceValue = parseFloat(bestPrice.innerText)
    const totalInput = document.getElementById('total-input');
    const totalInputInnertext = parseFloat(totalInput.innerText);
    const addTotal = memoryInnertext + storegeInnertext + deliveryInnertext + bastPriceValue;
    return totalInput.innerText = addTotal
};
// decreament total function

function decreamentTotal(inputId) {
    const inputField = document.getElementById(inputId);
    const currentvalue = parseFloat(inputField.innerText)
    const inputPriceField = document.getElementById('total-input');
    const totalinnerText = parseFloat(inputPriceField.innerText);
    const decreamentAmounr = totalinnerText - currentvalue;
    return inputPriceField.innerText = decreamentAmounr;
};

// total amount  function

function gettotalAmount() {
    const totalpriceInput = document.getElementById('total-amount');
    const totalpriceInputValue = parseFloat(totalpriceInput.innerText);
    const totalAmountField = document.getElementById('total-input');
    const totalAmountFieldinnerText = parseFloat(totalAmountField.innerText);

    return totalpriceInput.innerText = totalAmountFieldinnerText;
};

/* using cupon code for discound discount   */
// discount part 
document.getElementById('cupon-field').addEventListener('focus', function (event) {
    event.target.style.outline = "none"
    event.target.style.border = "2px solid green"
    console.log(event.target)
});
document.getElementById('cupon-field').addEventListener('blur', function (event) {
    event.target.style.border = "2px solid #ddd"
    console.log(event.target)
});
document.getElementById('cupon-field').addEventListener('keyup', function (event) {
    if (event.target.value == "stevekaku") {
        document.getElementById('cupon-btn').removeAttribute("disabled",)
        event.target.style.border = "2px solid green"
    } else if (event.target.value != "stevekaku") {
        event.target.style.border = "2px solid red"
        document.getElementById('cupon-btn').setAttribute('disabled', true)
    };
});

document.getElementById('cupon-field').addEventListener('change', function (event) {
    event.target.style.border = "2px solid #ddd"
    // console.log(event.target)
});

document.getElementById('cupon-btn').addEventListener('click', function () {
    const totalAmount = document.getElementById('total-input');
    const totalAmountcost = parseFloat(totalAmount.innerText);
    const discount = ((totalAmountcost * 20) / 100);
    const discountAmount = discount;
    const withDiscoundTotal = totalAmountcost - discountAmount;
    document.getElementById('total-amount').innerText = withDiscoundTotal;
    document.getElementById('cupon-field').value = "";
    document.getElementById('cupon-btn').setAttribute('disabled', true);
});






