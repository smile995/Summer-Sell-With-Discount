// console.log('connected');
let total = 0;
function handleClickOnDiv(target) {
    const selected = document.getElementById('selectedItemsContainer');

    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selected.append(li)
    const PriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const priceNumber = parseFloat(PriceString)
    console.log(priceNumber);
    total = total + priceNumber;
    const setTotal = document.getElementById('totalPrice');
    setTotal.innerText = total;
    
    
    document.getElementById('applyBtn').addEventListener('click', function () {
        const couponText = document.getElementById('couponText').value
        if (couponText === 'SELL200'&& total>=200) {
            const discount = (20 * total) / 100;
            document.getElementById('discount').innerText = discount;
            const AfterDiscount = total - discount;
            document.getElementById('AfterDiscount').innerText = AfterDiscount;
        }

        else{
          document.getElementById('AfterDiscount').innerText = total;
        }
    })


  document.getElementById('makePurchase').addEventListener('click',function(){
    document.getElementById('AfterDiscount').innerText = '00';
    couponText.value='';
    setTotal.innerText = '00';
    document.getElementById('discount').innerText = '00';
    li.innerText = '';
  })




}