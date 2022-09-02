/*
* @props  可以传任何类型的值  数字、字符串、布尔值、数组、对象、函数、JSX
*
* */

import { Component } from "react";
import FSon from "../FSon/FSon";
import FSonC from "../FSonC/FSonC";

class ParentC extends Component {

    constructor (props) {
        super(props);
        this.state = {
            FSonC: "this is FSonC"
        }
    }


    componentWillUnmount () {
    }


    componentDidMount () {
    }



    shouldComponentUpdate (nextProps, nextState, nextContext) {
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
    }

    componentDidCatch (error, errorInfo) {
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
            <h1>props 校验</h1>
            <FSon message={ this.state.FSon } changeMessage={ this.changeMessage }></FSon>
            <FSonC message={ this.state.FSonC } changeMessage={ this.changeMessage }></FSonC>
        </div>)
    }
}

export default ParentC;
