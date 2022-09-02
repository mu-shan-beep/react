import { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }

    setCount = () => {
        this.setState({ count: this.state.count+1 });
    }

    render () {
        return (
            <div>
                <p>{ this.state.count }</p>
                <button onClick={ this.setCount }>计数器</button>
            </div>
        )
    }
}

export default Counter;
