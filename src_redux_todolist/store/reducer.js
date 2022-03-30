const defaultState = {
  inputValue: "Write Something",
  taskList: [
    { id: 1, task: "8:00~8:05:学习Java" },
    { id: 2, task: "8:06~12:00:看一会抖音" },
    { id: 3, task: "12:00~12:40:去食堂吃饭" },
  ],
};
// reducer中的state是只读的，每次均返回新的state
export const reducer = (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type==='addTask'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.taskList.push({id:newState.taskList.length+1,task:newState.inputValue});
    newState.inputValue = '';
    return newState;
  }
  return state;
};
