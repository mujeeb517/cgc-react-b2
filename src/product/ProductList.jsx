// Container & Prsentation
import ProductItem from "./ProductItem";
import React from "react";
import axios from "axios";
import Spinner from "../util/Spinner";
import Error from '../util/Error';

class ProductList extends React.Component {

    state = {
        products: [],
        metadata: {},
        loading: true,
        hasErr: false,
        sort: '',
        direction: '',
        page: 1,
        limit: 5
    };

    fetchData = () => {
        this.setState({
            loading: true
        });
        const { page, limit, sort, direction } = this.state;
        const url = `https://cgc-api-b2.onrender.com/api/v1/products/page/${page}/limit/${limit}?sort=${sort}&direction=${direction}`;
        axios.get(url)
            .then(res => {
                this.setState({
                    products: res.data.data,
                    metadata: res.data.metadata,
                    loading: false
                });
            })
            .catch(err => this.setState({ hasErr: true, loading: false }));
    }

    constructor() {
        super();
        this.fetchData();
    }

    onNext = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.fetchData();
        });

    }

    onPrev = () => {
        const current = this.state.page;
        if (current > 1) {
            this.setState({
                page: current - 1
            }, () => {
                this.fetchData();
            });
        }
    }

    onPageSizeChange = (evt) => {
        this.setState({
            limit: evt.target.value
        }, () => {
            this.fetchData();
        });
    }

    onSortChange = (evt) => {
        const { value } = evt.target; //price:asc
        let sort = '', direction = '';
        if (value) {
            const tokens = value.split(':');
            sort = tokens[0];
            direction = tokens[1];
        }
        this.setState({
            sort: sort,
            direction: direction
        }, () => {
            this.fetchData();
        });
    }

    render() {
        return <div className="m-4">
            {this.state.loading && <Spinner />}
            <div className="flex">
                <h1 className="text-2xl font-semibold mb-4">Products</h1>
                <div className="mr-12 ml-auto">

                    <select onChange={this.onSortChange} className="p-2 border border-gray-200 rounded mr-2 font-semibold">
                        <option value="">Sort</option>
                        <option value="price:asc">Price Low to High</option>
                        <option value="price:desc">Price High to Low</option>
                        <option value="discount:asc">Discount Low to High</option>
                        <option value="discount:desc">Discount High to Low</option>
                    </select>

                    <select value={this.state.limit} onChange={this.onPageSizeChange} className="p-2 border border-gray-200 rounded mr-2 font-semibold">
                        <option value="">Per Page</option>
                        <option value="5">Per Page: 5</option>
                        <option value="10">Per Page: 10</option>
                        <option value="20">Per Page: 20</option>
                        <option value="50">Per Page: 50</option>
                    </select>
                    <button disabled={this.state.page === 1} className="border border-gray-200 p-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>
                    </button>
                    <button disabled={this.state.page === 1} onClick={this.onPrev} className="border border-gray-200 ml-2 p-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <span className="text-sm m-2">Showing page {this.state.page} of {this.state.metadata.totalPages} (Total:{this.state.metadata.count})</span>
                    <button disabled={this.state.page === this.state.metadata.totalPages} onClick={this.onNext} className="border border-gray-200 p-1 ml-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <button className="border border-gray-200 p-1 ml-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            {this.state.hasErr && <Error />}
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
                {this.state.products.map(prd => <ProductItem product={prd} />)}
            </div>
        </div>
    }
}



export default ProductList;
