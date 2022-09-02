import { Component } from "react";

class FSonC extends Component {
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

export default FSonC;
