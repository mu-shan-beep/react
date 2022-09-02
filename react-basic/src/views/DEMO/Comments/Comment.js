import avatar from "../../../images/avatar.png";
import "./Comment.css"
import { Component } from "react";

class Comment extends Component {
    state = {
        isActive: true,
        // hot: 热度排序  time: 时间排序
        tabs: [
            {
                id: 1,
                name: '热度',
                type: 'hot'
            }, {
                id: 2,
                name: '时间',
                type: 'time'
            }
        ],
        active: 'hot',
        list: [
            {
                id: 1,
                author: '刘德华',
                comment: '给我一杯忘情水',
                // 1: 点赞 0：无态度 -1:踩
                attitude: 1
            }, {
                id: 2,
                author: '周杰伦',
                comment: '哎哟，不错哦',
                attitude: 0
            }, {
                id: 3,
                author: '五月天',
                comment: '不打扰，是我的温柔',
                attitude: -1
            }
        ],
        textareaVal: "发条友善的评论"
    }

    handlerSort (e, val) {
        this.setState({
            isActive: val
        })
    }

    addSend (e) {
        this.setState({
            list: [
                {
                    id: this.state.list.length + 1,
                    author: this.state.textareaVal.substring(0, 3),
                    comment: this.state.textareaVal.substring(3, this.state.textareaVal.length),
                    // 1: 点赞 0：无态度 -1:踩
                    attitude: Math.floor(Math.random() * 2 - 1)
                }, ...this.state.list
            ]
        })
    }

    handlerChange (e) {
        this.setState({
            textareaVal: e.target.value
        })
    }

    deleteItem (e, idx) {
        this.state.list.splice(idx, 1);
        this.setState({
            list: this.state.list
        });

    }

    render () {
        return (<div className="comment-container">
                {/* 评论数 */ }
                <div className="comment-head">
                    <span>{ this.state.list.length } 评论</span>
                </div>
                {/* 排序 */ }
                <div className="tabs-order">
                    <ul className="sort-container">
                        <li onClick={ (e) => {
                            this.handlerSort(e, true)
                        } } className={ this.state.isActive ? 'on' : "" }>按热度排序
                        </li>
                        <li onClick={ (e) => {
                            this.handlerSort(e, false)
                        } } className={ this.state.isActive ? '' : "on" }>按时间排序
                        </li>
                    </ul>
                </div>

                {/* 添加评论 */ }
                <div className="comment-send">
                    <div className="user-face">
                        <img className="user-head" src={ avatar } alt="" />
                    </div>
                    <div className="textarea-container">
                        <textarea cols="80"
                                  rows="5"
                                  value={ this.state.textareaVal }
                                  className="ipt-txt" onChange={ (e) => {
                            this.handlerChange(e)
                        } } />
                        <button className="comment-submit" onClick={ (e) => {
                            this.addSend(e)
                        } }>发表评论
                        </button>
                    </div>
                    <div className="comment-emoji">
                        <i className="face"></i>
                        <span className="text">表情</span>
                    </div>
                </div>

                {/* 评论列表 */ }
                <div className="comment-list">
                    { this.state.list.map((item, i) => {
                        return (<div className={ "list-item" } key={ item.id }>
                            <div className="user-face">
                                <img className="user-head" src={ avatar } alt="" />
                            </div>
                            <div className="comment">
                                <div className="user">{ item.author }</div>
                                <p className="text">{ item.comment }</p>
                                <div className="info">
                                    <span className="like liked">
                                        <i className="icon" />
                                    </span>
                                    <span className="hate hated">
                                        <i className="icon" />
                                    </span>
                                    <span className="reply btn-hover" onClick={ (e) => {
                                        this.deleteItem(e, i)
                                    } }>删除</span>
                                </div>
                            </div>
                        </div>)
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Comment;
