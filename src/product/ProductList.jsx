// Container & Prsentation

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

function ProductList() {
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 600, inStock: false, image: 'https://images.pexels.com/photos/12741170/pexels-photo-12741170.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 700, inStock: true, image: 'https://images.pexels.com/photos/21832894/pexels-photo-21832894/free-photo-of-iphone.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, brand: 'Apple', model: 'Iphone 15', price: 800, inStock: true, image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, brand: 'Samsung', model: 'Galaxy S24', price: 700, inStock: false, image: 'https://images.pexels.com/photos/15493878/pexels-photo-15493878/free-photo-of-hands-on-samsung-galaxy-s23-ultra-5g-green-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=800' }
    ];

    return <div className="m-2">
        <h1 className="text-2xl font-semibold mb-4">Products</h1>
        <div className="grid grid-cols-3">
            {products.map(prd => <ProductItem product={prd} />)}
        </div>
    </div>
}

export default ProductList;
