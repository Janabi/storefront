import React from 'react';
import {connect} from 'react-redux';
import {categories} from '../store/data.js';
import {add, remove, reset} from '../store/cart.js';
import Product from "./products";
import Header from "./header";

const Categories = props => {
    console.log("props", props)
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

const mapDispatchToProps = {categories, add, remove, reset}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)