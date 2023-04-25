

export const onIncreaseHandler = (e, idx, cart, setCart) => {
    e.preventDefault();
    let copy = [...cart];
    copy[idx] = {
        ...copy[idx],
        amount: copy[idx].amount + 1,
    }
    setCart(copy);
    localStorage.setItem('cart', JSON.stringify(copy));
    
};

export const onDecreaseHandler = (e, idx, cart, setCart) => {
    e.preventDefault();
    if (cart[idx].amount === 1) {onDeleteHandler(e, idx, cart, setCart)}
    else {
        let copy = [...cart];
        copy[idx] = {
            ...copy[idx],
            amount: copy[idx].amount - 1,
        }
        setCart(copy);
        localStorage.setItem('cart', JSON.stringify(copy));
    }
};

export const onDeleteHandler = (e, idx, cart, setCart) => {
    e.preventDefault();
    let copy = [...cart];
    copy.splice(idx, 1);
    console.log(copy);
    setCart(copy);
    localStorage.setItem('cart', JSON.stringify(copy));
};

export const checkTotalPrice = (total, setTotal, total_, cart) => {
    cart.map((data) => {
        console.log(total);
        total_ = total_ + (data.amount * data.price);
        setTotal(total_);
    })
};

export const onBuyHandler = (e, setCart) => {
    e.preventDefault();
    setCart([]);
    localStorage.setItem('cart', "[]");
    alert('주문이 완료되었습니다!');
};