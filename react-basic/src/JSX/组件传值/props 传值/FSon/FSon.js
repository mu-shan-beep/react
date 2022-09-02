function FSon (props) {
    const changeMessage = () => {
        props.changeMessage("我是函数子组件传的值",1);
    }

    return (<div>
        <p>函数子组件</p>
        <p>{ props.message }</p>
        <button onClick={ changeMessage }>向父组件传值</button>
    </div>)
}

export default FSon;
