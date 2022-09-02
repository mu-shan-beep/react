import { Button, Form, Input, Modal, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TodoElMVC.css';

const { Search } = Input;

function TodoElMVC () {

    const [ list, setList ] = useState([]);
    const [ isChange, setIsChange ] = useState(true);

    // 获取列表
    const loadList = async () => {
        const res = await axios.get('http://localhost:3001/data');
        setList(res.data);
    };

    const onChange = (e) => {
        if (!e.target.value) {
            loadList();
        }
    };

    useEffect(() => {
        loadList();
    }, []);

    // 删除
    const del = async (id) => {
        await axios.delete(`http://localhost:3001/data/${ id }`);
        loadList();
    };

    //修改数据
    const rest = async (id) => {
        const res = await axios.get(`http://localhost:3001/data/${ id }`);
        form.setFieldsValue({
            name: res.data.name,
            des: res.data.des
        });
        setId(id);
        SetIsModalVisible(true);
    };

    // 搜索数据
    const onSearch = async (value) => {
        const res = await axios.get(`http://localhost:3001/data/?q=${ value }`);
        setList(res.data);
    };

    const [ isModalVisible, SetIsModalVisible ] = useState(false);
    const [ id, setId ] = useState(0);
    const [ form ] = Form.useForm();

    // 添加填写完成并添加
    const handleOk = () => {
        if (isChange) {
            addList();
        } else if (!isChange) {
            debugger;
            changeList();
        }
        closeModal();
        loadList();
        setIsChange(true);
    };

    const changeList = () => {
        const {
            name,
            des
        } = form.getFieldsValue();
        debugger;
        axios.put("http://localhost:3001/data/" + id, {
            name,
            des
        });
    };

    //添加数据
    const addList = () => {
        const {
            name,
            des
        } = form.getFieldsValue();
        axios.post("http://localhost:3001/data", {
            name,
            des
        });
    };

    //关闭弹框并重置表单
    const closeModal = () => {
        form.resetFields();
        SetIsModalVisible(false);
    };

    const columns = [
        {
            title: '任务编号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '任务名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '任务描述',
            dataIndex: 'des',
            key: 'des'
        },
        {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={ () => {
                        del(record.id);
                    } }>删除</Button>
                    <Button type="primary" onClick={
                        () => {
                            setIsChange(false);
                            rest(record.id);
                        } }>修改</Button>
                </Space>
            )
        }
    ];

    return (
        <div className="container">
            <div className="search-box">
                <Search
                    placeholder="请输入关键词"
                    allowClear
                    enterButton="搜索"
                    onChange={ onChange }
                    onSearch={ onSearch }
                />
                <Button type="primary" onClick={ () => {
                    SetIsModalVisible(true);
                } }>添加</Button>
            </div>
            <Table bordered
                   dataSource={ list }
                   columns={ columns }
                   rowKey={ (record) => record.id }
                   pagination={ false } />

            {/*添加新数据弹框*/ }
            <Modal title="添加"
                   visible={ isModalVisible }
                   onOk={ handleOk }
                   onCancel={ closeModal }
            >
                <Form form={ form } colon={ true } labelCol={ { span: 4 } }>
                    <Form.Item label="事件名称"
                               name="name"
                               validateStatus={ "warning" }
                               help={ "事件名不能为空" }>
                        <Input />
                    </Form.Item>
                    <Form.Item label="事件描述"
                               name="des"
                               validateStatus={ "warning" }
                               help={ "事件名不能为空" }>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default TodoElMVC;
