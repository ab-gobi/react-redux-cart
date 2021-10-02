import {configureStore} from '@reduxjs/toolkit';
import UISlice from './ui-slice';
import CartSlice from './cart-slice';

const Store = configureStore({
    reducer:{
        uislice : UISlice.reducer,
        cartslice : CartSlice.reducer
    }
});

export default Store;