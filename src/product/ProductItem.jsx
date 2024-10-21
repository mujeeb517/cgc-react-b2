import { Link } from 'react-router-dom';
import NoImg from '../assets/noimg.webp';
import moment from 'moment';
import myAxios from '../util/myAxios';
import { useState } from 'react';
import Error from '../util/Error';

const ProductItem = ({ product, onDeleteNotify }) => {

    const [err, setErr] = useState(null);

    const getDiscountedPrice = () => {
        const { price, discount } = product;
        const discountAmt = (price * discount) / 100;
        return price - discountAmt;
    };

    const onDelete = async () => {
        try {
            await myAxios().delete(`/api/v1/products/${product._id}`);
            // TODO: Refresh the products
            onDeleteNotify(product._id);
        } catch (err) {
            setErr(err.response.status);
            // setError(403)
            // setError(500)
        }
    };

    return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4">
        <button onClick={onDelete} className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        {err === 403 ? <Error msg="No Permission to delete" /> : null}
        {err === 500 ? <Error /> : null}

        <img className="rounded w-full" src={product.image ? product.image : NoImg} alt="" />
        <div className="p-5">
            <Link to={"/product-detail/" + product._id}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.brand} {product.model}</h5>
                <h5 className="text-sm tracking-tight text-gray-900 line-through">${product.price}</h5>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">${getDiscountedPrice()}
                    <span className="ml-1 text-xs font-normal">({product.discount}% off)</span>
                </h5>
            </Link>
            {
                product.inStock ?
                    <div>
                        <button className="bg-orange-500 p-2 text-white hover:bg-orange-600 rounded">Add to cart</button>
                        <button className="bg-orange-500 p-2 m-2 text-white hover:bg-orange-600 rounded">Buy Now</button>
                    </div> :
                    <div>
                        <button className="bg-orange-500 p-2 text-white hover:bg-orange-600 rounded">Notify Me When Avaialble</button>
                    </div>
            }
            <div className="text-sm text-gray-400">Last updated: {moment(product.updatedDate).fromNow()}</div>
        </div>
    </div>
};

export default ProductItem;