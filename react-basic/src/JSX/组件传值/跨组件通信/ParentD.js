// 跨组件通信
import { Component, createContext, useContext } from "react";
import { Button } from "antd";

//解构赋值  用法
const {
    Provider,
    Consumer
} = createContext("");

//消费数据
class ComC extends Component {
    render () {
        return (<>
                <div>跨组件通讯</div>
                <Consumer>
                    { (value) => <div>{ value }</div> }
                </Consumer>
            </>
        )
    }
}

class ComA extends Component {
    render () {
        return (<ComC />)
    }
}

class ParentD extends Component {

    state = {
        message: "我是Provider 传递的参数"
    }

    changeMessage = (val) => {
        console.log(val)
    }

    render () {
        return (
            <Provider value={ this.state.message }>
                <>
                    <ComA />
                </>
            </Provider>
        )
    }
}

//    非解构赋值
const CountContext = createContext({
    value: 0,
    changeData: () => {}
});

function ComB () {
    let value = 0;
    const changeData = function() {
        value++
    }

    const provider = {
        value,
        changeData
    }
    return (<CountContext.Provider value={ provider }
        >
            <ComD />
        < /CountContext.Provider>
    )
}

function ComD () {
    //获取到父组件传的值
    const count = useContext(CountContext);
    return (<><p>{ count.value }</p>
        <Button type="primary" onClick={ () => {
            count.changeData()
        } }>按钮</Button>
    </>)
}

function ComE () {
    return (<>
        <ComB />
    </>)
}

export {
    ComE,
    ParentD
}
