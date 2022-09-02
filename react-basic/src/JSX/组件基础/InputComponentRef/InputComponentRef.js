import { Component, createRef } from "react";

class InputComponentRef extends Component {

    state = {
        value: "this is message"
    }
    //创键一个存放Dom的对象容器
    msgRef = createRef();

    changeHandler = () => {
        this.setState({
            value: this.msgRef.current.value
        });
    }

    render () {
        return (<div>
            {/*ref 获取真是dom*/ }
            <p>{this.state.value}</p>
            <input type="text" ref={ this.msgRef } onChange={this.changeHandler} />
        </div>)
    }
}


export   default InputComponentRef;
