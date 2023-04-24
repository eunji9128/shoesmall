

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
    console.log('total1: ', total);
    cart.map((data) => {
        console.log(total);
        total_ = total_ + (data.amount * data.price);
        setTotal(total_);
    })
};