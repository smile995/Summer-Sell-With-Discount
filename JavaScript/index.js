// console.log('connected');
function handleClickOnDiv(target){
   const selected= document.getElementById('selectedItemsContainer');
    const itemName=target.childNodes[3].childNodes[3].innerText;
    console.log(itemName);
    const h5=document.createElement('p');
    h5.innerText=itemName;
    selected.append(h5)
    const PriceString=target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const priceNumber=parseFloat(PriceString);
    console.log(priceNumber);
    

}