import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
// import {categories} from '../store/data.js';
// import {remove, reset} from '../store/cart.js';
import Product from "./products";
import Header from "./header";
import * as actions from '../store/actions';

function Categories (props) {
    console.log("props", props)
    // console.log('outside useEfect')
    // const [value, setValue] = useState({});
    const getData = async ()=>{
        document.title = 'Hello';
        await props.get();
    }
    
    useEffect(() => {
        console.log('inside useEfect');
        getData();
    }, ['']);

    // useEffect(() => {
    //     console.log('inside useEfect')
    //     setValue(props.data)
    // }, [value])

    return (
        <section>
            <Header cart={props}></Header>
            <Product data={props}></Product>
        </section>
    )
}

const mapStateToProps = state => ({
    myData: state.data,
    cartItem: state.carts
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    add: (name) => dispatch(actions.add(name)),
    remove: (name) => dispatch(actions.remove(name)),
    reset: () => dispatch(actions.reset()),
    getCategory: (name) => dispatch(actions.categories(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)