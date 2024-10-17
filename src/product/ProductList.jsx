// Container & Prsentation
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import myAxios from "../util/myAxios";
import Spinner from "../util/Spinner";
import Error from '../util/Error';
import { Link } from "react-router-dom";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [metadata, setMetadata] = useState({});
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('');
    const [direction, setDirection] = useState('');
    const [search, setSearch] = useState('');
    const [hasErr, setErr] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const fetchData = () => {
        setLoading(true);
        const url = `/api/v1/products/page/${page}/limit/${limit}?sort=${sort}&direction=${direction}&search=${search}`;
        myAxios().get(url)
            .then(res => {
                setProducts(res.data.data);
                setMetadata(res.data.metadata);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                setErr(true);
            });
    }

    // compnentDidMount
    // componentDidUpdate
    useEffect(() => fetchData(), [page, limit, sort, direction]);

    const onNext = () => setPage(page + 1);;

    const onPrev = () => setPage(page - 1);

    const onPageSizeChange = (evt) => setLimit(evt.target.value);


    const onSortChange = (evt) => {
        const { value } = evt.target; //price:asc
        let sort = '', direction = '';
        if (value) {
            const tokens = value.split(':');
            sort = tokens[0];
            direction = tokens[1];
        }
        setSort(sort);
        setDirection(direction);
    }

    const onSearchChange = (evt) => {
        if (evt.key === 'Enter') {
            fetchData();
        } else {
            setSearch(evt.target.value);
        }
    };

    return <div className="m-4">
        {loading && <Spinner />}
        <div className="flex">
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            <div className="mr-12 ml-auto">
                <Link className="bg-orange-500 px-1 py-2 m-2 rounded text-white" to="/products/new">Add New Product</Link>
                <input onKeyDown={onSearchChange} className="p-2 mr-2 font-semibold border border-gray-200 rounded" type="text" placeholder="Search" />

                <select onChange={onSortChange} className="p-2 border border-gray-200 rounded mr-2 font-semibold">
                    <option value="">Sort</option>
                    <option value="price:asc">Price Low to High</option>
                    <option value="price:desc">Price High to Low</option>
                    <option value="discount:asc">Discount Low to High</option>
                    <option value="discount:desc">Discount High to Low</option>
                </select>

                <select value={limit} onChange={onPageSizeChange} className="p-2 border border-gray-200 rounded mr-2 font-semibold">
                    <option value="">Per Page</option>
                    <option value="5">Per Page: 5</option>
                    <option value="10">Per Page: 10</option>
                    <option value="20">Per Page: 20</option>
                    <option value="50">Per Page: 50</option>
                </select>
                <button disabled={page === 1} className="border border-gray-200 p-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </button>
                <button disabled={page === 1} onClick={onPrev} className="border border-gray-200 ml-2 p-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <span className="text-sm m-2">Showing page {page} of {metadata.totalPages} (Total:{metadata.count})</span>
                <button disabled={page === metadata.totalPages} onClick={onNext} className="border border-gray-200 p-1 ml-1 hover:bg-gray-200 rounded disabled:bg-gray-100">
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
        {hasErr && <Error />}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
            {products.map(prd => <ProductItem product={prd} />)}
        </div>
    </div>
}



export default ProductList;
