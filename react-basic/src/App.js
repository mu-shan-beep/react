import './App.css';
import UseNavigate from "./views/UseNavigate/UseNavigate";
import { Outlet } from "react-router-dom";

function App () {
    return (<div className="App">
        <UseNavigate />
        {/*子组件出口，即子组件渲染在此处*/ }
        <Outlet />
        {/*渲染组件*/ }
        {/*<Routes>*/ }
        {/*    <Route path="/" element={ <TodoElMVC /> } />*/ }
        {/*    <Route path="/comment" element={ <Comment /> }></Route>*/ }
        {/*    <Route path="/listItem" element={ <ListItem /> } />*/ }
        {/*    <Route path="/todoMvc" element={ <TodoMVC /> }></Route>*/ }
        {/*    <Route path="/useParams/:name" element={ <UseParams /> }>*/ }
        {/*    </Route>*/ }
        {/*    <Route path="/useSearchParams" element={ <UseSearchParams /> }>*/ }
        {/*    </Route>*/ }
        {/*</Routes>*/ }
    </div>)
}

export default App;
