import { useState } from "react";

function useWindowScroll () {
    const [ Y, setY ] = useState(0);

    window.onscroll = (e) => {
        setY(document.documentElement.scrollTop);
    }
    return [ Y ];
}


export   default useWindowScroll;
