import { observer } from "mobx-react-lite";
import { Button } from "antd";
import { useEffect } from "react";
import useStore from "../../store/Mobx/MobxCounterStore";

function MobxStoreComponent1 () {
    useEffect(() => {
        counter.getData();
    }, []);

    const counter = useStore();
    return (
        <>
            <h1>我是Mobx测试组件1</h1>
            <p>我是模块化数据：{counter.task1.taskList}</p>
            <p>{ counter.count }{ counter.dobe }</p>
            <Button type="primary" onClick={ () => {
                counter.addCount()
            } }>++</Button>
            <Button type="primary" onClick={ () => {
                counter.cutCount()
            } }>--</Button>
        </>
    )
}

export default observer(MobxStoreComponent1);
