import { Button, Form, Input, Modal, Popconfirm, Space, Table } from 'antd'
import axios from 'axios'
import React from 'react'
import './TodoMVC.css'

const { Search } = Input

class TodoMVC extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            columns: [
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
                            <Popconfirm title="确定要删除吗?"
                                        onConfirm={ () => this.handleDelete(record.id) }>
                                <a href="#">删除</a>
                            </Popconfirm>
                        </Space>
                    )
                }
            ],
            isModalVisible: false,
            name: "",
            des: ""
        }
    }

    // 搜索
    onSearch = async (value) => {
        const res = await axios.get(`http://localhost:3001/data/?q=${ value }`)
        this.setState({
            list: res.data
        })
    }
    // 删除
    handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/data/${ id }`)
        await this.loadList();
    }

    // 加载列表
    loadList = async () => {
        const res = await axios.get('http://localhost:3001/data')
        this.setState({
            list: res.data
        })
    }

    //添加
    addList = async () => {
        await axios.post(`http://localhost:3001/data`, {
            name: this.state.name,
            des: this.state.des
        });
        this.loadList();
    }

    //组件加载完成钩子
    componentDidMount () {
        // 发送接口请求
        this.loadList();
    }

    //显示弹框
    showModal = () => {
        this.setState({
            isModalVisible: true
        });
    }

    //添加完成
    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
        this.addList();
        this.restForm();
    }

    //取消添加
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        });
        this.restForm();
    }

    //更新表单绑定的值
    setFormData (e, type) {
        if (type === "name") {
            this.setState({
                name: e.target.value
            })
        } else if (type === "des") {
            this.setState({
                des: e.target.value
            })
        }
    }

    //重置表单
    restForm () {
        this.setState({
            name: "",
            des: ""
        })
    }

    render () {
        return (
            <div className="container">
                <div className="search-box">
                    <Search
                        placeholder="请输入关键词"
                        allowClear
                        enterButton="搜索"
                        value={ this.state.keyword }
                        onSearch={ this.onSearch }
                    />
                    <Button type="primary" onClick={ this.showModal }>添加</Button>
                </div>

                {/*表格*/ }
                <Table bordered dataSource={ this.state.list } columns={ this.state.columns } pagination={ false } />

                {/*添加新数据弹框*/ }
                <Modal title="添加"
                       visible={ this.state.isModalVisible }
                       onOk={ this.handleOk }
                       onCancel={ this.handleCancel }>
                    <Form colon={ true } labelCol={ { span: 4 } } onFinish={ this.handleOk }>
                        <Form.Item label="事件名称" name="name">
                            <Input onChange={ (e) => {
                                this.setFormData(e, "name")
                            } } />
                        </Form.Item>
                        <Form.Item label="事件描述" name="des">
                            <Input onChange={ (e) => {
                                this.setFormData(e, "des")
                            } } />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default TodoMVC
