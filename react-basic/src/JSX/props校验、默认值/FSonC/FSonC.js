import { Component } from "react";
import PropTypes from "prop-types";

class FSonC extends Component {
    constructor (props) {
        super(props);
    }

    //设置 props 属性默认值
    static  defaultProps = {
        message: "我是子组件",
        changeMessage (val) {
            console.log(val);
        }
    }

    changeMessage = () => {
        this.props.changeMessage("我是类子组件传的值", 0);
    }

    render () {
        return (<div>
            <p>类子组件</p>
            <p>{ this.props.message }</p>
            <button onClick={ this.changeMessage }>修改父组件传值</button>
        </div>)
    }
}

FSonC.propTypes = {
    message: PropTypes.string,
    changeMessage: PropTypes.func
}

export default FSonC;
