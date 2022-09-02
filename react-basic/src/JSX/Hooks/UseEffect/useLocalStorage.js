import { useEffect, useState } from "react";

function useLocalStorage (key, defaultValue) {
    const [ val, setVal ] = useState(defaultValue);

    useEffect(() => {
        this.state.window.localStorage.setItem(key, val);
    }, [ val,key ]);

    return [ val,setVal ];
}
