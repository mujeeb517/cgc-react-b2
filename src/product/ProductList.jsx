// Container & Prsentation
import ProductItem from "./ProductItem";
import React from "react";
import axios from "axios";
import Spinner from "../util/Spinner";
import Error from '../util/Error';

class ProductList extends React.Component {

    state = {
        products: [],
        loading: true,
        hasErr: false
    };

    constructor() {
        super();

        axios.get('https://cgc-api-b2.onrender.com/api/v1/products1')
            .then(res => {
                this.setState({
                    products: res.data.data,
                    loading: false
                });
            })
            .catch(err => this.setState({ hasErr: true, loading: false }));
    }

    render() {
        return <div className="m-4">
            {this.state.loading && <Spinner />}
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            {this.state.hasErr && <Error />}
            <div className="grid grid-cols-3">
                {this.state.products.map(prd => <ProductItem product={prd} />)}
            </div>
        </div>
    }
}



export default ProductList;
