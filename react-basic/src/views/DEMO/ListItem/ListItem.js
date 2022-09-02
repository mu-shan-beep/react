import { Component } from "react";
import { useParams } from "react-router-dom";

class ListItem extends Component {
    render () {
        return (<div>
            <h3>{ this.props.name }</h3>
            <p>{ this.props.price }</p>
            <p>{ this.props.info }</p>
            <button onClick={ () => this.props.delHandler(this.props.id) }>删除</button>
        </div>)
    }
}

class ParentList extends Component {
    state = {
        list: [
            {
                id: 1,
                name: '超级好吃的棒棒糖',
                price: 18.8,
                info: '开业大酬宾，全场8折'
            },
            {
                id: 2,
                name: '超级好吃的大鸡腿',
                price: 34.2,
                info: '开业大酬宾，全场8折'
            },
            {
                id: 3,
                name: '超级无敌的冰激凌',
                price: 14.2,
                info: '开业大酬宾，全场8折'
            }
        ]
    }


    delHandler = (id) => {
        this.setState({

            list: this.state.list.filter((item) => {
                return item.id !== id
            })
        })
    }

    render () {
        return (<>
            {
                this.state.list.map(item => {
                    return (<ListItem key={ item.id } { ...item } delHandler={ this.delHandler }></ListItem>)
                })
            }
        </>)
    }
}

export default ParentList;
