let totalPrice = 0;

function updatePrice(e) {
    const addedItemsList = document.getElementById('added-items');
    const selectedItem = e.childNodes[7].childNodes[1].innerText;

    const newItem = document.createElement('li');
    newItem.innerText = selectedItem;
    addedItemsList.appendChild(newItem);

    const itemPrice = parseFloat(e.childNodes[7].childNodes[3].childNodes[1].innerText);
    let currentPrice = document.getElementById('total-price'); // Fixed the ID to match the HTML.
    totalPrice += itemPrice; // Use the shorthand operator for addition.

    currentPrice.innerText = totalPrice.toFixed(2); // Display total price with two decimal places.

    if (totalPrice >= 200) {
        const couponApplyBtn = document.getElementById('coupon-apply-btn');
        couponApplyBtn.removeAttribute('disabled');

        couponApplyBtn.addEventListener('click', function () {
            const couponValue = document.getElementById('coupon-field').value;
            const discount = document.getElementById('discount');
            const grandTotal = document.getElementById('grand-total');
            if (couponValue === 'SELL200' && totalPrice >= 200) { // Check for both coupon and total price conditions.
                totalPrice -= 200; // Deduct the discount from the total price.
                discount.innerText = 200;
                grandTotal.innerText = totalPrice.toFixed(2); // Display grand total with two decimal places.
            }
        });
    }

    if (totalPrice !== 0) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled');
        purchaseBtn.addEventListener('click', function () {
            console.log('purchase');
            my_modal_3.showModal();
        });
    }
}
