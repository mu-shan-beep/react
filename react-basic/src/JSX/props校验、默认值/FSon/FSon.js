//函数组件设置 props 默认值

function FSon ({
                   message = "我是子组件",
                   changeMessage = (val) => {
                       console.log(val,"val");
                   }
               }) {
    const changeMessage1 = () => {
        changeMessage("我是函数子组件传的值", 1);
    }


    return (<div>
        <p>函数子组件</p>
        <p>{ message }</p>
        <button onClick={ changeMessage1 }>向父组件传值</button>
    </div>)
}

export default FSon;
