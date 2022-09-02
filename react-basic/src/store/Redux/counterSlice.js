import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//  创建 Redux 模块
export const counter = createSlice({
    //模块名
    name: "counter",
    //注册数据
    initialState: {
        value: 0,
        arr: []
    },

    //修改 state
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByMount: (state, action) => {
            // action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
            state.arr = action.payload;
            console.log(state.arr);
        }
    }
});

// 每个 case reducer 函数会生成对应的 Action creators
export const {
    increment,
    decrement,
    incrementByMount
} = counter.actions;

//异步数据 处理
export const incrementAsync = () => (dispatch,getState) => {
    axios.get("http://geek.itheima.net/v1_0/channels").then((res) => {
        dispatch(incrementByMount(res.data.data.channels));
    });
};

export default counter.reducer;
