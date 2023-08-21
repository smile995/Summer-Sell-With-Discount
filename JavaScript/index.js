// console.log('connected');
let total = 0;
function handleClickOnDiv(target) {
    const selected = document.getElementById('selectedItemsContainer');

    const itemName = target.childNodes[3].childNodes[3].innerText;
    console.log(itemName);
    const h5 = document.createElement('p');
    h5.innerText = itemName;
    selected.append(h5)
    const PriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const priceNumber = parseFloat(PriceString)
    console.log(priceNumber);
    total = total + priceNumber;
    const setTotal = document.getElementById('totalPrice');
    setTotal.innerText = total;

    
    

    if(total>=200){
        const discount=(20*total)/100;
        document.getElementById('discount').innerText=discount;
        const AfterDiscount=total-discount;
        document.getElementById('AfterDiscount').innerText=AfterDiscount;
    }

    


}