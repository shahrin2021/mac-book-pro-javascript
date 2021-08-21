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
    // getSsdStorage('storage-cost', '0');
    getProductPrice('storage-cost', '0');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount();

});
// 512gb ssd storage 
document.getElementById('medium-storage').addEventListener('click', function () {
    // getSsdStorage('storage-cost', '100');
    getProductPrice('storage-cost', '100');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount()


});
// 1 tb ssd storage 
document.getElementById('extra-storage').addEventListener('click', function () {
    // getSsdStorage('storage-cost', '180');
    getProductPrice('storage-cost', '180');
    decreamentTotal('storage-cost');
    increaseTotal();
    gettotalAmount()
});


/* delivery free btn */
document.getElementById('delivery-free').addEventListener('click', function () {
    // getdeliveryCost('delivery-input', "0");
    getProductPrice('delivery-input', "0");
    decreamentTotal('delivery-input');
    increaseTotal();
    gettotalAmount()

});
document.getElementById('delivery-cost').addEventListener('click', function () {
    // getdeliveryCost('delivery-input', "20");
    getProductPrice('delivery-input', "20");
    increaseTotal();
    gettotalAmount()

});

/* delivery cost btn */
// get memory cost function

function getProductPrice(input, price) {
    const productInput = document.getElementById(input);
    const productCost = parseFloat(productInput.innerText);

    return productInput.innerText = price;
};

/* comment part start */

// get storage cost function

// function getSsdStorage(input, price) {
//     const storage = document.getElementById(input);
//     const storageValue = parseFloat(storage.innerText);
//     return storage.innerText = price;
// }




// delivery function

// function getdeliveryCost(inputId, cost) {
//     const deliveryInput = document.getElementById(inputId);
//     const deliveryValue = parseFloat(deliveryInput.innerText);
//     return deliveryInput.innerText = cost;
// };

/* comment part end */


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


/* discount part  */
document.getElementById('copun-field').addEventListener('focus', function (event) {
    event.target.style.outline = "none"
    event.target.style.border = "2px solid green"
    console.log(event.target)
})
document.getElementById('copun-field').addEventListener('blur', function (event) {
    event.target.style.border = "2px solid #ddd"
    console.log(event.target)
})
document.getElementById('copun-field').addEventListener('keyup', function (event) {
    if (event.target.value == "stevekaku") {
        document.getElementById('copun-btn').removeAttribute("disabled")
        event.target.style.border = "2px solid green"
    } else if (event.target.value != "stevekaku") {
        event.target.style.border = "2px solid red"
    }
    else {
        document.getElementById('copun-btn').setAttribute('disabled', true)
    }
})

document.getElementById('copun-field').addEventListener('change', function (event) {
    event.target.style.border = "2px solid #ddd"
    console.log(event.target)
})

document.getElementById('copun-btn').addEventListener('click', function () {

    const totalAmount = document.getElementById('total-input');
    const totalAmountcost = parseFloat(totalAmount.innerText);
    const discount = ((totalAmountcost * 20) / 100);
    const discountAmount = discount;
    const withDiscoundTotal = totalAmountcost - discountAmount;
    document.getElementById('total-amount').innerText = withDiscoundTotal;
})






