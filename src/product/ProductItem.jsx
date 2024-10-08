const ProductItem = ({ product }) => {
    return <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4">
        <img class="rounded w-full h-64" src={product.image} alt="" />
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.brand} {product.model}</h5>
                <h5 class="mb-2 font-bold tracking-tight text-gray-900">${product.price}</h5>
            </a>
            {
                product.inStock ?
                    <div>
                        <button className="bg-orange-500 p-2 m-2 text-white hover:bg-orange-600 rounded">Add to cart</button>
                        <button className="bg-orange-500 p-2 m-2 text-white hover:bg-orange-600 rounded">Buy Now</button>
                    </div> :
                    <div>
                        <button className="bg-orange-500 p-2 text-white hover:bg-orange-600 rounded">Notify Me When Avaialble</button>
                    </div>
            }
        </div>
    </div>
};

export default ProductItem;