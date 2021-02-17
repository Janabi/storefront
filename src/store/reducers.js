let initialState = {
    categories: [],
    products: [],
    activeCategory: 'electronics'
};

// reducer
export default (state = initialState, action) => {
    const {type, payload} = action;
    console.log("Type in Reducer = ", type)
    switch (type) {
        case 'GET':
            console.log("payload >>>> ", payload)
            state = payload;
            return payload;
        case 'PUT':
            return payload;
        case 'categories':
            state.activeCategory = payload;
            console.log("activeCategory>>>>", state.activeCategory)
            return {...state};
        default:
           return state;
    }
}