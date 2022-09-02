import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import WrapperRoutes from "./routes/routes";

//使用Provider包裹根组件，并将 store 通过 prop 传入
import { Provider } from "react-redux";
import store from "./store/Redux/Redux";

// import"./mockjs/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <Provider store={ store }>
        <BrowserRouter>
            <WrapperRoutes />
        </BrowserRouter>
    </Provider>
</React.StrictMode>);
