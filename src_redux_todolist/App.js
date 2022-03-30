import React, { Component } from "react";
import store from './store'
import TaskList from "./TaskList";

const data = [
  "8:00~8:05:学习Java",
  "8:06~12:00:看一会抖音",
  "12:00~12:12:40:去食堂吃饭",
];

export default class App extends Component {
    constructor(props){
        super(props)
        console.info(store.getState());
        this.state = store.getState();
        this.onInputChange= this.onInputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.onAddClicked = this.onAddClicked.bind(this)
    }

    componentDidMount() { 
        store.subscribe(this.storeChange)
     }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <label htmlFor="task">
            Task:
            <input
              placeholder={this.state.inputValue}
              type="text"
              onChange={this.onInputChange}
              value={this.state.inputValue}
              style={{ marginRight: "10px" }}
            />
          </label>
          <input 
          type="button" 
          value="Add Task" 
          onClick={this.onAddClicked}        
          />
        </div>
        <div style={{margin:'10px',width:'300px'}}>
            <TaskList dataSource={this.state.taskList}   onItemClicked={this.onItemClicked}/>
        </div>
      </div>
    );
  }

  onItemClicked=(index)=>{
      const action={
          type:'remove',
          target:index
      }
      console.log(action);
  }

  onInputChange(e){
    const action = {
        type:'changeInput',
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

  storeChange(){
      this.setState(store.getState())
  }
}
