import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";
import { decrement, increment, incrementAsync } from "../../store/Redux/counterSlice";

function ReduxCounterComponent () {

    //可以获取值，但不会触发视图更新
    // const count = (() => store.getState().counter.value)();

    const count = useSelector((state) => {return state.counter.value;});
    const list = useSelector((state) => {return state.counter.arr;});

    const dispatch = useDispatch();

    return (<>
        <div>
            <div>
                <Card>{ count }</Card>
                <Button onClick={ () => {dispatch(increment());} }> Increment</Button>
                <Button onClick={ () => {dispatch(decrement());} }>Decrement</Button>
                <Button onClick={ () => {dispatch(incrementAsync(12));} }>修改</Button>
                <ul>
                    { list.map((item) => {
                        return <li key={ item.id }>{ item.name }</li>;
                    }) }
                </ul>
            </div>
        </div>
    </>);
}

export default ReduxCounterComponent;
