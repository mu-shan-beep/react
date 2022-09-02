import './App.css';
import { useState } from "react";

const todoList = [
    {
        title: '开发任务-1',
        status: '22-05-22 18:15'
    }, {
        title: '开发任务-3',
        status: '22-05-22 18:15'
    }, {
        title: '开发任务-5',
        status: '22-05-22 18:15'
    }, {
        title: '测试任务-3',
        status: '22-05-22 18:15'
    }
];
const ongoingList = [
    {
        title: '开发任务-4',
        status: '22-05-22 18:15'
    }, {
        title: '开发任务-6',
        status: '22-05-22 18:15'
    }, {
        title: '测试任务-2',
        status: '22-05-22 18:15'
    }
];
const doneList = [
    {
        title: '开发任务-2',
        status: '22-05-22 18:15'
    }, {
        title: '测试任务-1',
        status: '22-05-22 18:15'
    }
];

const KanbanCard = ({
                        title,
                        status
                    }) => {
    return (<li className="kanban-card">
        <div className="card-title"> { title }</div>
        <div className="card-status">{ status }</div>
    </li>);
};

const KanbanNewCard = ({ onSubmit }) => {
    const [ title, setTitle ] = useState("");

    const handleChange = (evt) => {
        setTitle(evt.target.value);
    }

    const handleKeyDown = (evt) => {
        console.log(title, "title", evt.key)

        if (evt.key === "Enter") {
            onSubmit(title);
        }
    }

    return (<li className="kanban-card">
        <h3>添加新卡片</h3>
        <div className="card-title">
            <input type="text" value={ title } onChange={ handleChange } onKeyDown={ handleKeyDown } />
        </div>
    </li>);
};

function App (props) {

    //基础hook
    //返回一个 state，以及更新 state 的函数。
    const [
        showAdd,
        setAdd
    ] = useState(false);

    const handleAdd = () => {
        setAdd(true);
    }

    const [ todoList, changeTodoList ] = useState([
        {
            title: '开发任务-1',
            status: '22-05-22 18:15'
        }, {
            title: '开发任务-3',
            status: '22-05-22 18:15'
        }, {
            title: '开发任务-5',
            status: '22-05-22 18:15'
        }, {
            title: '测试任务-3',
            status: '22-05-22 18:15'
        }
    ])

    const handleChange = (title) => {
        changeTodoList(() => [
            {
                title,
                status: new Date().toDateString()
            }, ...todoList
        ])

        //组件内更改 State 会使组件重新渲染
        setAdd(false);
    }

    return (<div className="App">
        <header className="App-header">
            <h1>我的看板</h1>
        </header>
        <main className="kanban-board">
            <section className="kanban-column column-todo">
                <h2>待处理 <button onClick={ handleAdd } disabled={ showAdd }>&#8853; 添加新卡片</button></h2>
                { showAdd && <KanbanNewCard onSubmit={ handleChange } /> }
                <ul>
                    {/*{ new Array(10).fill("").map(() => {
                        return (<li className="kanban-card">
                            <div className="card-title">开发任务-1</div>
                            <div className="card-status">22-05-22 18:15</div>
                        </li>);
                    }) }*/ }
                    { todoList.map(props => {
                        return <KanbanCard { ...props } key={ Math.random() * 1000 } />
                    }) }

                </ul>
            </section>
            <section className="kanban-column column-ongoing">
                <h2>进行中</h2>
                <ul>
                    { ongoingList.map(props => {
                        return <KanbanCard { ...props } key={ Math.random() * 1000 } />
                    }) }
                </ul>

            </section>
            <section className="kanban-column column-done">
                <h2>已完成</h2>
                <ul>
                    { doneList.map(props => {
                        // props  父组件对子组件传值
                        return <KanbanCard { ...props } key={ Math.random() * 1000 } />
                    }) }
                </ul>

            </section>
        </main>

    </div>);
}

export default App;
