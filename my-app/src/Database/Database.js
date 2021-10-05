const addtoDataBase=id=>{
    const exists =getData();
    // let shopping_cart={};
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
      }
      else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
          const newCount = shopping_cart[id] + 1;
          shopping_cart[id] = newCount;
        }
        else {
        
        }
      }
      updateData(shopping_cart);
    

}
const getData =()=>localStorage.getItem('shoppingCart');
const updateData=cart=>{
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists =getData();
    if(!exists){

    }
    
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateData(shopping_cart);
  }
}


export { addtoDataBase }