import { useRoutes } from "react-router-dom";
import Comment from "../views/DEMO/Comments/Comment";
import ListItem from "../views/DEMO/ListItem/ListItem";
import App from "../App";
import UseParams from "../JSX/Router/UseParams/UseParams";
import UseSearchParams from "../JSX/Router/UseSearchParams/UseSearchParams";
import TodoElMVC from "../views/DEMO/TodoElMVC/TodoElMVC";
import CounterStore2 from "../JSX/MobxStoreComponent/MobxStoreComponent2";
import CounterStore1 from "../JSX/MobxStoreComponent/MobxStoreComponent1";
import TodoList from "../views/DEMO/TodoList/TodoList";
import ReduxCounterComponent from "../views/ReduxStore/ReduxStoreComponent";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,//设置默认二级路由不可以设置路径
                element: <Comment />
            }, {
                path: "listItem",
                element: <ListItem />
            },
            {
                pathName: "todoElMVC",
                params: {
                    name: "小明",
                    age: 12
                },
                path: "todoElMVC",
                element: <TodoElMVC />
            },
            {
                path: "useParams/:name",
                element: <UseParams />
            },
            {
                path: "useSearchParams",
                element: <UseSearchParams />
            },
            {
                path: "counterStore1",
                element: <CounterStore1 />
            },
            {
                path: "counterStore2",
                element: <CounterStore2 />
            },
            {
                path: "todoList",
                element: <TodoList />
            },
            {
                path: "reduxCounter",
                element: <ReduxCounterComponent />
            }
        ]
    }

];

function WrapperRoutes () {
    return useRoutes(routes);
}

export default WrapperRoutes;
