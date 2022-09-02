import { configureStore } from '@reduxjs/toolkit';

import counter from "./counterSlice";

// 组合子模块
const store = configureStore({
    reducer: {
        //将 store 添加到 redux
        counter
    }
});


/*
* { counter:{
*      value:0
*   }
* }
*
* */
export default store;
