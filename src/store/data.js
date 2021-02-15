let initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'electronics'
};

// const pickCat = (payload) =>{
//     let electronicPro = initialState.products.reduce((acc, val)=>{
//         if (val.category === payload) {
//             return val;
//         }
//     }, [])
//     return {selected: electronicPro, categories: initialState.categories};
// }

const category = initialState.categories.map(val=>{
    return val.name;
})

export default (state = initialState, action) => {
    console.log("state>>>>>", state)
    console.log("action>>>>>", action)
    let {type, payload} = action;
    switch (type) {
        case 'categories':
            if(category.includes(payload)) {
                return {...state, activeCategory: payload}
                // return pickCat(payload)
            }
        default:
            return {...state, activeCategory: initialState.activeCategory}
    }
}

export const categories = (name) => {
    console.log("in increment action name=", name);
    return {
        type: 'categories',
        payload: name
    }
}