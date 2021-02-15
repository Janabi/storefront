import React from 'react';
import {connect} from 'react-redux';
import {categories} from '../store/data.js';
import Product from "./products";

const Categories = props => {
    console.log("props", props)
    return (
        <section>
            <Product data={props}></Product>
        </section>
    )
}

const mapStateToProps = state => ({
    myData: state.data
});

const mapDispatchToProps = {categories}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)