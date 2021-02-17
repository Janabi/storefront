import axios from 'axios';

// .env
const apiCat = 'https://api-server-janabi.herokuapp.com/api/v1/categories';
const apiProduct = 'https://api-server-janabi.herokuapp.com/api/v1/products';

// action creator function returns an object 
// I am returning a function that has a call for superagent API
export const getRemoteData = (activeCategory) => async (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    let dataCat = await axios({method: 'get', url: apiCat});
    let dataProduct = await axios({method: 'get', url: apiProduct});
    console.log("dataCat>>>>>", dataCat)
    return dispatch(getAction({categories: dataCat.data.data, products: dataProduct.data.data, activeCategory: 'electronics'}));
    
}

export const putRemoteData = (body, activeCategory) => async (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    await axios({method: 'put', url: apiProduct, data: JSON.stringify(body),headers: { 'Content-Type':'application/json' }});

    return axios({method: 'get', url: apiCat}).then(dataCat=> {
        return axios({method: 'get', url: apiProduct}).then(dataProduct =>{
            dispatch(putAction({categories: dataCat.body, products: dataProduct.body, activeCategory: activeCategory}))
        })
    });
}

// action creator function.
const getAction = payload => {
    console.log("in getAction@@@@@@@@@!!!!")
    return {
        type: 'GET',
        payload: payload
    }
}
const putAction = payload => {
    console.log("in putAction@@@@@@@@@!!!!")
    return {
        type: 'PUT',
        payload: payload
    }
}
export const categories = name => (dispatch) => {
    console.log("in categories@@@@@@@@@!!!!", name)
    return dispatch({
        type: 'categories',
        payload: name
    })
}

export const add = (item) => async (dispatch) =>{
    console.log("item>>>>>>", item)
    item.inStock--;
    await axios({method: 'put', 
                url: `${apiProduct}/${item._id}`, 
                data: JSON.stringify(item),
                headers: { 'Content-Type':'application/json' }
    });
    return dispatch({
        type: 'add',
        payload: item.name,
        body: item
    })
}
export const remove = (item) => async(dispatch) =>{
    console.log("in categories@@@@@@@@@!!!!", item)
    item.body.inStock++;
    await axios({method: 'put', 
                url: `${apiProduct}/${item.body._id}`, 
                data: JSON.stringify(item.body),
                headers: { 'Content-Type':'application/json' }
    });
    return dispatch({
        type: 'remove',
        payload: item.name
    })
}
export const reset = ()=> (dispatch)  =>{
    return dispatch({
        type: 'reset'
    })
}