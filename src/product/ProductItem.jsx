import NoImg from '../assets/noimg.webp';
import moment from 'moment';

const ProductItem = ({ product }) => {

    const getDiscountedPrice = () => {
        const { price, discount } = product;
        const discountAmt = (price * discount) / 100;
        return price - discountAmt;
    };

    return <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4">
        <img class="rounded w-full" src={NoImg} alt="" />
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.brand} {product.model}</h5>
                <h5 class="text-sm tracking-tight text-gray-900 line-through">${product.price}</h5>
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">${getDiscountedPrice()}
                    <span className="ml-1 text-xs font-normal">({product.discount}% off)</span>
                </h5>
            </a>
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