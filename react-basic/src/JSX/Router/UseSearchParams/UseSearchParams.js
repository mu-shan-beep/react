import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

//通过 useSearchParams 获取参数
function UseParams () {
    const [ searchParams, setSearchParams ] = useSearchParams()
    useEffect(() => {
        console.log(searchParams.get("name"));
    }, []);

    return (<>
        <h1>我是路由传进来的参数：{ searchParams.get("name") }</h1>
    </>)
}

export default UseParams;
