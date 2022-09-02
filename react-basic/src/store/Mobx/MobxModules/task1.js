import { makeAutoObservable } from "mobx";

class TaskStore1 {
    taskList = [ "我是小明" ];

    constructor () {
        makeAutoObservable(this);
    }

    addCount () {
        this.count++;
    }

}

const taskStore1 = new TaskStore1();

export default taskStore1;
