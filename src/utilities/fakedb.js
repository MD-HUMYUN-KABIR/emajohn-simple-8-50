// use local storage to manage cart data
const addToDb = id => {
   /*
    1."addToDb function" k kuno akta id theke call kora hobe , 
    2. "addToDb" abar "getShoppingCart()"" function k call korbe, 
    3. finally "getShoppingCart()" abar  sei id ta k akta object er property hisebe set korbe,
    4. sei object e akta akta kore id property hisebe set hote thakbe
    5.  "getShoppingCart()"" puro object ta k  return kore nie asbe
    5. .and oi id gula soho object ta k "shoppingCart" variable e  set korbe "let shoppingCart = getShoppingCart();
     */
    let shoppingCart = getShoppingCart();
    // add quantity
    /* 
    let object = {22222:2, 33333:4, 44444:5}
    object[22222] ----2
    object[33333] ----4
    object[44444] ----5
    kuno object er property number hole setar value object[property] die pete hoy,
    tai "let shoppingCart = getShoppingCart()" varaiable er object er property hisebe jei id gula ache, segula  jehetu number tai sei id gular value k shoppingCart[id] die e pete hobe
    */

    const quantity = shoppingCart[id];
   
    if (!quantity) {
         //first e jodi id er kuno value na thake tahole "shoppingCart[id] = 1" sekhane idr value hisebe 1 set kore dewa hobe
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    //finally localStorage a 'shopping-cart' k key hisebe set kora hobe and setar value hisebe puro "shoppingCart" er object ta k JSON.stringify set kore dewa hobe.cause local storage e set korle stringify kore nite hobe

    //akhane bar bar vivonno id tader value soho object asbe and bar bar "let shoppingCart = getShoppingCart();" shoppingCart object er property change hobe then,  bar bar notuon kore localStorage a 'shopping-cart' k key hisebe set kora hobe and setar value hisebe puro "shoppingCart" er new object ta k JSON.stringify set kore dewa hobe 
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    /* 
    "getShoppingCart()" akta object return kore anbe
    */
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        //object e loop in chalate hoy
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
