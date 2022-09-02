import './TodoList.css';
import useStore from "../../../store/Mobx/MobxCounterStore";
import { Button, Card, Checkbox, Form, Input, Layout, Modal, Radio } from "antd";
import { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { Content, Footer } from "antd/es/layout/layout";
import { observer } from "mobx-react-lite";

function TodoList () {

    //导入 mobx 对象
    const taskStore = useStore();

    //保存事件
    const [ list, setList ] = useState(taskStore.list);

    //获取表单实例
    const [ form ] = Form.useForm();

    //设置搜索字段
    const [ search, setSearch ] = useState("");

    //修改事件状态
    const onChange = (id) => {
        taskStore.changeDone(id);

    };

    //删除事件
    const delList = (e, i) => {
        taskStore.delList(i);
    };

    let formData;

    //修改事件
    const changeList = (e, i) => {
        formData = {
            name: taskStore.list[i].name,
            id: taskStore.list[i].id,
            isDone: taskStore.list[i].isDone
        };
        form.setFieldsValue({ ...formData });
    };

    //添加新事件
    const addEvent = (e) => {
        if (e.code === "Enter" && search.trim() !== "" || e === "search") {
            taskStore.changeList({
                name: search,
                id: taskStore.list.length + 1,
                isDone: false
            });
            setSearch("");
        }
    };

    //弹框
    const [ isModalVisible, setModalVisible ] = useState(false);

    const completeModal = () => {
        setModalVisible(false);
        const {
            name,
            id,
            isDone
        } = form.getFieldsValue();
        taskStore.changeList2({
            name,
            id,
            isDone
        });
    };

    const closeModal = () => setModalVisible(false);

    //查询
    const [ searchData, setSearchData ] = useState("");

    const searchEvent = (e) => {
        if (e.code === "Enter" && searchData.trim() !== "" || e === "search") {
            setList(list.filter((item) => {
                return item.name.indexOf(searchData) !== -1;
            }));
        }
    };

    useEffect(() => {
        if (!searchData) {
            setList(taskStore.list);
        }
    }, [ searchData ]);

    return (<Layout className="todoapp">
        <Content className="main">
            <Search placeholder="输入您要查询的事件名称"
                    enterButton="查询"
                    value={ searchData }
                    onSearch={ () => searchEvent("search") }
                    onChange={ (e) => {
                        setSearchData(e.target.value.trim());
                        searchEvent("search");
                    } }
                    onPressEnter={ (e) => {searchEvent(e);} } />
            <Search placeholder="输入新的事件"
                    enterButton="添加"
                    value={ search }
                    onSearch={ () => addEvent("search") }
                    onChange={ (e) => { setSearch(e.target.value.trim()); } }
                    onPressEnter={ (e) => { addEvent(e); } } />
            {
                list.map((item, i) => {
                    const j = i;
                    return (
                        <Card key={ item.id }>
                            <Checkbox className={ item.isDone ? "through" : "" }
                                      disabled={ item.isDone }
                                      checked={ item.isDone }
                                      onChange={ () => {
                                          onChange(i);
                                      } }>{ item.name }</Checkbox>
                            <Button className="pre-right"
                                    onClick={ (e) => {
                                        delList(e, j);
                                    } }
                                    type="primary">删除</Button>
                            <Button className="pre-right"
                                    disabled={ item.isDone }
                                    type="primary"
                                    onClick={ (e) => {
                                        changeList(e, j);
                                        setModalVisible(true);
                                    } }>修改</Button>
                        </Card>);
                })
            }
        </Content>
        <Footer>
            <p>全部事件：{ list.length } / 已完成事件：{ list.filter((item) => item.isDone).length }</p>
        </Footer>

        <Modal title="修改 Modal" visible={ isModalVisible } onOk={ completeModal } onCancel={ closeModal }>
            <Form
                form={ form }
                name="basic"
                labelCol={ { span: 5 } }
                wrapperCol={ { span: 19 } }
            >
                <Form.Item label="name" name="name"><Input /></Form.Item>
                <Form.Item label="id" name="id"><Input disabled={ true } /></Form.Item>
                <Form.Item label="isDone" name="isDone">
                    <Radio.Group>
                        <Radio value={ true }>已完成</Radio>
                        <Radio value={ false }>未完成</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    </Layout>)
        ;
}

export default observer(TodoList);
