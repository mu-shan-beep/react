import { useState } from "react";
import { useParams } from "react-router-dom";

function UseParams () {
    const params = useParams();

    return (<>
        <h1>我是路由传进来的参数：{ params.name }</h1>
    </>)
}

export default UseParams;
