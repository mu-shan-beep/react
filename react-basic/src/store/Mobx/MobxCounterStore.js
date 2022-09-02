import { makeAutoObservable } from "mobx";
import axios from "axios";
import task1 from "./MobxModules/task1";
import task2 from "./MobxModules/task2";
import { createContext, useContext } from "react";

class MobxCounterStore {
    list = [
        {
            id: 1,
            name: '学习react',
            isDone: true
        },
        {
            id: 2,
            name: '搞定mobx',
            isDone: false
        }
    ];
    count = 0;

    constructor () {
        //响应式处理  可配置数据响应方式
        makeAutoObservable(this);
        this.task1 = task1;
        this.task2 = task2;
    }

    changeDone (i) {
        this.list[i].isDone = !this.list[i].isDone;
    }

    changeList (item) {
        this.list.push(item);
    }

    changeList2 (val) {
        this.list.forEach((item, i) => {
            if (item.id === val.id) {
                this.list[i] = val;
            }
        });
    }

    changeItem (i, val) {
        this.list[i] = val;
    }

    delList (i) {this.list.splice(i, 1);};

    addCount () {
        this.count++;
    }

    get dobe () {
        return this.count * 2;
    }

    cutCount () {
        this.count--;
    };

    * getData () {
        const res = yield axios.get("http://localhost:3001/data");
    };
}

const counter = new MobxCounterStore();

//模块化
const MobxCounter = createContext(counter);
const useStore = () => useContext(MobxCounter);

export default useStore;
