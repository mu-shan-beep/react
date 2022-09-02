import { Menu } from "antd";
import { Link } from "react-router-dom";

//Link  导航
function HeaderTab (props) {
    return (<Menu mode="horizontal" defaultSelectedKeys={ [ "index" ] }>
        <Menu.Item key="index">
            <Link to="/">TodoElMVC</Link>
        </Menu.Item>
        <Menu.Item key="comment">
            <Link to="/comment">Comment</Link>
        </Menu.Item>
        <Menu.Item key="listItem">
            <Link to="/listItem">listItem</Link>
        </Menu.Item>
        <Menu.Item key="todoMvc">
            <Link to="/todoMVC">todoMvc</Link>
        </Menu.Item>
    </Menu>)

}

export default HeaderTab;
