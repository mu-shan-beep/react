/*
* @props  可以传任何类型的值  数字、字符串、布尔值、数组、对象、函数、JSX
*
* */

import { Component, createContext } from "react";
import FSon from "../FSon/FSon";
import FSonC from "../FSonC/FSonC";


class ParentC extends Component {
    state = {
        FSonC: "this is FSonC",
        FSon: "this is FSon"
    }

    //子组件向父组件传值
    changeMessage = (sonVal, idx) => {
        if (idx === 0) {
            this.setState({
                FSonC: sonVal
            })
        } else {
            this.setState({
                FSon: sonVal
            })
        }
    }

    render () {
        return (<div>
            <FSon changeMessage={ this.changeMessage } message={ this.state.FSon }></FSon>
            <FSonC message={ this.state.FSonC } changeMessage={ this.changeMessage }></FSonC>
        </div>)
    }
}

export default ParentC;
