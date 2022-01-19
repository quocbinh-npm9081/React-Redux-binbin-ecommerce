const cart = [];

const handleCart = (state = cart, action) => {

    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            //check if product is already exist
            const exist = state.find(x => x.id === product.id);
            if (exist) {
                //increase the quantity
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1 } : x)
            } else {
                const newProduct = action.payload;
                return [
                    ...state, {...newProduct, qty: 1 }
                ]
            }
        case 'DELITEM':
            const existDe = state.find(x => x.id === product.id);
            if (existDe) {
                if (existDe.qty === 1) {
                    return state.filter((x) => x.id !== existDe.id)
                } else {
                    return state.map(x => x.id === existDe.id ? {...x, qty: x.qty - 1 } : x)
                }
            }
            break;
        default:
            return state;
    }

}


export default handleCart;