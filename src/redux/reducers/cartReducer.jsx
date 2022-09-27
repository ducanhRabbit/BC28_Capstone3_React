import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartList: [{
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "size": "[36,37,38,39,40,41,42]",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "deleted": false,
        "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
        "relatedProducts": "[2,3,5]",
        "feature": true,
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
      },
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "size": "[36,37,38,39,40,41,42]",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 990,
        "deleted": false,
        "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
        "relatedProducts": "[1,4,6]",
        "feature": false,
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
      },],
    totalQuantity: 0,
    totalBill: 0

}

const cartReducer = createSlice({
  name:'cartReducer',
  initialState,
  reducers: {
    addToCart: (state,action)=>{
        const newItem = action.payload;

        const existingItem = state.cartList.find(item => item.id === newItem.id);

        if(!existingItem){
            state.cartList.push({
                ...newItem,
                // quantity:1,
                totalPrice:newItem.price,
            })
        }else{
            existingItem.quantity+= newItem.quantity;
            existingItem.totalPrice = Number(existingItem.quantity) * Number(existingItem.price)
        }
        state.totalBill = state.cartList.reduce((total,item)=>{
            total + item.totalPrice;
        },0);
    },
    removeFromCart: (state,action)=>{
        const {id} = action.payload;
        const indexItemRemove = state.cartList.findIndex(item => item.id === id)
        state.cartList.splice(indexItemRemove,1);
        
        // state.totalBill = state.cartList.reduce((total,item)=>{
        //     total + item.totalPrice;
        // },0);
    }
  }
});

export const {} = cartReducer.actions

export default cartReducer.reducer