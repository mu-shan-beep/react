function HelloFn () {

    const clickHandler = (evt) => {
        console.log("我是事件对象：" + evt);
        console.log("我是函数组件事件，我被触发了");
    }

    return (<div>
        <h1>这是我的第一个函数组件</h1>
        <button onClick={ clickHandler }>点击我</button>
    </div>);
}

export default HelloFn;
