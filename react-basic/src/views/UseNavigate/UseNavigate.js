import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

//编程式导航
function UseNavigate () {
    const navigate = useNavigate();

    const items = [
        {
            label: '主页',
            key: "/"
        },
        {
            label: 'todoElMVC',
            key: "/todoElMVC"
        },
        {
            label: 'listItem',
            key: "/listItem"
        },
        {
            label: "useParams",
            key: "/useParams/我是小明"
        },
        {
            label: "useSearchParams",
            key: "/useSearchParams?name=我是小明"
        },
        {
            label: "counterStore1",
            key: "/counterStore1"
        },
        {
            label: "counterStore2",
            key: "/counterStore2"
        },
        {
            label: "todoList",
            key: "/todoList"
        },
        {
            label: "ReduxCounter",
            key: "/reduxCounter"
        }
    ];

    return (<Menu onClick={ (item) => {navigate(item.key);} }
                  items={ items }
                  mode="horizontal"
                  defaultSelectedKeys={ [ "/" ] }></Menu>);
}

export default UseNavigate;
