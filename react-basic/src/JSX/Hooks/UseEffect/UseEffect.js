import { useEffect, useState } from "react";
import { Button } from "antd";

import useWindowScroll from "./useWindowScroll";

function UseEffect (props) {

    const [ count, setCount ] = useState(0);
    const [ title, setTitle ] = useState("小明");
    const [ Y ] = useWindowScroll();


    useEffect(() => {
        document.title = `当前点击了${ count }`;
    }, [ count ]);

    useEffect(() => {
        console.log(title, "title");
    }, [ title ]);

    return (<>
        <p>{ count }</p>
        <Button type="primary" onClick={ () => {
            setCount(count + 1)
        } }>count++</Button>
        <Button type="primary" onClick={ () => {
            setCount(count - 1)
        } }>count--</Button>

        <Button type="primary" onClick={ (e) => {
            setTitle("我是副作用" + Math.random());
        } }>测试副作用</Button>

    </>)

}

export default UseEffect;
