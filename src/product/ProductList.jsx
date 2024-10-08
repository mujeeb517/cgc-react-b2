// Container & Prsentation
import ProductItem from "./ProductItem";

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
