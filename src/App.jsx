import React, { Component } from 'react'
import store from './store/index'
import TaskList from './TaskList'

const tasks = [
    { id: 1, task: "8:00~8:05:学习Java" },
    { id: 2, task: "8:06~12:00:看一会抖音" },
    { id: 3, task: "12:00~12:40:去食堂吃饭" },
]

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.onInputChange = this.onInputChange.bind(this)
        this.onStoreChange = this.onStoreChange.bind(this)
        this.onAddClicked = this.onAddClicked.bind(this)
    }

    componentDidMount() { 
        store.subscribe(this.onStoreChange)
     }

    onInputChange(e){
        /**
         * 由于用户在页面上进行了文本框的输入动作，
         * 所以创建一个action对象
         */
        const action = {
            type:'onInput',
            value:e.target.value
        }  
        store.dispatch(action);  
    }

    onAddClicked(){
        const action = {
            type:'addTask'
        }
        store.dispatch(action)
    }

    /**
     * 当store中包存的状态发生了变化，更新组件的UI
     */
    onStoreChange(){
        this.setState(store.getState())
    }

    render() {
        return (
            <div>
                <label htmlFor='task'>Task:
                    <input
                        id='task'
                        style={{ margin: '10px' }}
                        type='text'
                        value={this.state.inputValue}
                        onChange={this.onInputChange}
                    />
                </label>
                <input 
                type='button' 
                value='Add' 
                onClick={this.onAddClicked}
                />
                <TaskList dataSource={this.state.tasks} />
            </div>
        )
    }
}
