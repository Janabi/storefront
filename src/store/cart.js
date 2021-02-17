let initialState = {
    carts: [],
    totalCarts: 0
}

export default (state = initialState, action) => {
    let {type, payload, body} = action;
    switch (type) {
        case 'add':
            if(state.carts.length === 0) {
                state.carts.push({name: payload, quantity: 1, body});
                state.totalCarts++;
            } else {
                let stateItem = state.carts.reduce((acc, item) =>{
                    if(item.name === payload) {
                        item.quantity++;
                        state.totalCarts++;
                        acc = true;
                        return acc;
                    }
                    return acc;
                }, false)
                if(!stateItem) {
                    state.carts.push({name: payload, quantity: 1, body});
                    state.totalCarts++;
                }
            }
            console.log("state>>>", state)
            return {...state};
        case 'remove':
            console.log("state.carts>>>>", state.carts)
            let items = state.carts.reduce((acc, item) =>{
                if(item.name === payload && item.quantity > 1) {
                    state.totalCarts--;
                    item.quantity--;
                } else if(item.name === payload && item.quantity === 1) {
                    state.totalCarts -= item.quantity;
                    return acc;
                }
                acc.push(item)
                return acc;
            }, [])
            return {...state, carts: items};
        case 'reset':
            state.carts = [];
            state.totalCarts = 0;
            return state;
        default:
            return state;
            
    }
}
