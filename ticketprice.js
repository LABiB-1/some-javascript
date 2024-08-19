function ticketprice(quantity){
    const price1 = 100;
    const price2 = 90;
    const price3 = 70;
    if(quantity <= 100){
        totalprice = price1 * quantity;
    }
    else if(100 < quantity >= 200){
        totalprice = ((price1 * 100) + ((quantity - 100)*price2));
    }
    else{
        totalprice = ((price1 * 100) + (price2*100) + ((quantity - 200)*price3));
    }
    return totalprice;
}
let quantity = 201;
total = ticketprice(quantity);
console.log(total);
