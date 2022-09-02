import { observer } from "mobx-react-lite";
import { Button } from "antd";
import useStore from "../../store/Mobx/MobxCounterStore";

function MobxStoreComponent1 () {
    const counter = useStore();
    return (
        <>
            <h1>我是Mobx测试组件2</h1>
            <p>{ counter.count }</p>
            <Button onClick={ () => {
                counter.addCount()
            } }>++</Button>

        </>
    )
}

export default observer(MobxStoreComponent1);
