import { useEffect, useRef } from "react";

function UseRef () {

    const h1Ref = useRef(null);

    useEffect(() => {
        console.log(h1Ref);
    }, [ h1Ref ]);

    return (<div>
        <h1 ref={ h1Ref }>我是useRef</h1>
    </div>)
}


export  default UseRef;
