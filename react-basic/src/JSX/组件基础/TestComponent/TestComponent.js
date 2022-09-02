const TestComponent = () => {

    const list = [
        {
            id: 1001,
            name: "rect"
        }, {
            id: 1002,
            name: "rect"
        }
    ];

    const onDel = (e, id) => {
        console.log(e, id);
    }

    return (<ul>
        { list.map(item => <li key={ item.id }>{ item.name }
            <button onClick={ (e) => onDel(e, item.id) }>X</button>
        </li>) }
    </ul>)

}

export default TestComponent;
