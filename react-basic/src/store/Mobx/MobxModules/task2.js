import { makeAutoObservable } from "mobx";

class TaskStore2 {
    count = 0
    list = [ 1, 2, 3, 4, 5, 6 ]

    constructor () {
        makeAutoObservable(this);
    }

    changeList () {
        this.list.push(7, 8, 9);
    }

    get FilterList () {
        return this.list.filter(((item) => {
            return item > 3
        }))
    }
}

const taskStore2 = new TaskStore2();

export default taskStore2;
