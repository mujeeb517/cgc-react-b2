import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../util/Error";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const [product, setProduct] = useState({});
    const [err, setErr] = useState(false);
    const params = useParams();


    const id = params.id;

    useEffect(() => {
        axios
            .get(`https://cgc-api-b2.onrender.com/api/v1/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => setErr(true));
    }, []);


    return (<div className="m-4">
        <h1 className="text-xl">Product Detail</h1>
        {err && <Error />}
        <ProductItem product={product} />

        <div>
            <h1 className="text-lg font-semibold text-gray-600">Reviews {product.rating}*</h1>
            {product.reviews && product.reviews.length === 0 && <div>
                <h1 className="font-semibold text-gray-400">Be the first one to add a review</h1>
                <button className="bg-orange-600 text-white p-2 rounded m-2">Add Review Now</button>
            </div>}

            {product.reviews && product.reviews.map(review => <div className="m-4">
                <h1 className="font-bold">{review.subject} {review.rating}*</h1>
                <div>{review.message}</div>
                <hr />
            </div>)}
        </div>
    </div>);
}

export default ProductDetail;