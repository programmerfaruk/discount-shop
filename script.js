
let totalPrice = 0;

function updatePrice(e) {
    const addedItemsList = document.getElementById('added-items');
    // console.log(e.parentNode.childNodes[3].childNodes[7].childNodes[1].innerText);
    const selectedItem = e.childNodes[7].childNodes[1].innerText;

    // console.log(addedItemsList.childNodes);
    // const existingItems = addedItemsList.childNodes;
    // for(existingItems of existingItems){
    //     console.log(existingItems);
    // }

    const newItem = document.createElement('li');
    newItem.innerText = selectedItem;
    addedItemsList.appendChild(newItem);

    const itemPrice = parseFloat(e.childNodes[7].childNodes[3].childNodes[1].innerText);
    // console.log('item price', itemPrice, typeof itemPrice);
    let currentPrice = document.getElementById('total-Price');
    // console.log('currrent price' , currentPrice, typeof currentPrice);
    totalPrice = totalPrice + itemPrice;
    // console.log(totalPrice);
    currentPrice.innerText = totalPrice;

    if (totalPrice >= 200) {
        const couponApplyBtn = document.getElementById('coupon-apply-btn');
        couponApplyBtn.removeAttribute('disabled');
        // document.getElementById('coupon-apply-btn').addEventListener('click', function () {
        //     const couponValue = document.getElementById('coupon-field').value;
        //     const discount = document.getElementById('discount');
        //     const grandTotal = document.getElementById('grand-total');
        //     if (couponValue === 'SELL200') {
        //         console.log(totalPrice, 'befor');
        //         const discountValue = (totalPrice * 20) / 100;
        //         totalPrice = totalPrice - discountValue;
        //         console.log(totalPrice, 'after discount');
        //         grandTotal.innerText = totalPrice;
        //         discount.innerText = discountValue;
        //     }
        // })
    }

    if (totalPrice !== 0) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled')
        purchaseBtn.addEventListener('click', function () {
            console.log('purces');
            my_modal_3.showModal()
        })
    }

}

function applyCoupon() {
    const couponValue = document.getElementById('coupon-field').value;
    const discount = document.getElementById('discount');
    const grandTotal = document.getElementById('grand-total');
    if (couponValue === 'SELL200') {
        console.log(totalPrice, 'befor');
        const discountValue = (totalPrice * 20) / 100
        totalPrice = totalPrice - discountValue;
        console.log(totalPrice, 'after discount');
        grandTotal.innerText = totalPrice;
        discount.innerText = discountValue;
    }
};

function goHome(){
    location.href="index.html"
}