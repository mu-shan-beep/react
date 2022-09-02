import { Component } from "react";

export default class HelloC extends Component {

    clickHandler = (e, num) => {
        console.log(this);
    }

    clickHandler1 () {
        console.log(this)
    }

    render () {
        return (<div>
            <h5>我的第一个类组件</h5>
            <button onClick={ (e) => this.clickHandler(e, 123) }>箭头函数
            </button>
            <button style={ {
                marginLeft: '10px'
            } } onClick={ this.clickHandler1 }>普通函数
            </button>
        </div>)
    }
}
