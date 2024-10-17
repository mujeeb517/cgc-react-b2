import { useState } from "react";
import Error from "../util/Error";
import { useNavigate } from "react-router-dom";
import myAxios from "../util/myAxios";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        inStock: false,
        discount: ''
    });

    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const onInputChange = (evt) => {
        const newProduct = { ...product, [evt.target.name]: evt.target.value };
        setProduct(newProduct);
    };

    const onSubmit = async () => {
        try {
            product.inStock = product.inStock === 'on';
            await myAxios().post('/api/v1/products', product);
            setSuccess(true);
            setProduct({
                brand: '',
                model: '',
                price: '',
                inStock: false,
                discount: ''
            });
            navigate('/products');
        } catch (err) {
            setErr(true);
        }
    };

    return (<div className="m-4">
        <form method="POST">
            <h1 className="font-bold text-lg">New Product</h1>
            {err && <Error />}
            {success && <h1 className="w-1/3 p-2 rounded bg-green-400">Successfully created!</h1>}
            {/* Brand */}
            <div className="m-2">
                <label className="block text-gray-500">Brand</label>
                <input value={product.brand} name="brand" onChange={onInputChange} className="p-2 font-semibold border border-gray-300 rounded" type="textbox" />
                {product.brand ? null : <div className="text-red-300">Required</div>}
                {product.brand && product.brand.length < 3 && <div className="text-red-300">Min 3 Chars</div>}
                {product.brand && product.brand.length > 20 && <div className="text-red-300">Max 20 Chars</div>}
            </div>

            {/* Model */}
            <div className="m-2">
                <label className="block text-gray-500">Model</label>
                <input value={product.model} name="model" onChange={onInputChange} className={product.model ? "p-2 font-semibold border-l-4 border-green-400 border rounded" : "p-2 font-semibold border-l-4 border-red-400 border rounded"} type="textbox" />
                {product.model ? null : <div className="text-red-300">Required</div>}
            </div>

            {/* Price */}
            <div className="m-2">
                <label className="block text-gray-500">Price</label>
                <input value={product.price} name="price" onChange={onInputChange} className="p-2 font-semibold border border-gray-300 rounded" type="textbox" />
                {product.price ? null : <div className="text-red-300">Required</div>}
            </div>

            {/* Discount */}
            <div className="m-2">
                <label className="block text-gray-500">Discount</label>
                <input value={product.discount} name="discount" onChange={onInputChange} className="p-2 font-semibold border border-gray-300 rounded" type="textbox" />
            </div>

            {/* Discount */}
            <div className="m-2">
                <label className="text-gray-500">Instock</label>
                <input value={product.inStock ? 'on' : 'off'} name="inStock" onChange={onInputChange} className="p-2 m-1 w-4 h-4 font-semibold border border-gray-300 rounded" type="checkbox" />
            </div>

            <div>
                <button disabled={!product.brand || !product.model || !product.price} onClick={onSubmit} type="button" className="bg-orange-500 p-2 disabled:bg-gray-400 text-white rounded hover:bg-orange-600">Submit</button>
            </div>
        </form>
    </div>);
}

export default NewProduct;