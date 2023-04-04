import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
// console.log('line 6 cartproductsloader ' , products);

const storedCart = getShoppingCart();
console.log('cartproductsloader', storedCart);
const savedCart = [];
for(const id in storedCart){

    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // local storage e add kora idr quantity and product er idr quantity soman kore dilam
        savedCart.push(addedProduct);
    }
}
//if you need to return two things
//return [products, savedCart] by array
//or by object
//return {products, savedCart}
return savedCart;
}

export default cartProductsLoader;