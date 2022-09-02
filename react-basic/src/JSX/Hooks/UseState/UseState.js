import { useState } from "react";
import { Button } from "antd";
import  "./UseState.css"

function UseState (props) {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <p>{ count }</p>
            <Button type="primary" onClick={ () => {
                setCount(count + 1)
            } }>count++
            </Button>
            <Button type="primary" onClick={ () => {
                setCount(count - 1)
            } }>count--</Button>
        </>
    )
}

export default UseState;
