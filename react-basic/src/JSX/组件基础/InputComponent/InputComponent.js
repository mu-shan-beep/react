import { Component } from "react";

//受控表单组件
class InputComponent extends Component {
    state = {
        message: "this is  message"
    }

    changeHandler = (e) => {
        this.setState({ message: e.target.value });
    }

    render () {
        return (
            <div>
                <p>{ this.state.message }</p>
                {/* 绑定value 绑定事件*/ }
                <input value={ this.state.message } onChange={ this.changeHandler } />
                <hr />

            </div>
        )
    }
}

export default InputComponent;
