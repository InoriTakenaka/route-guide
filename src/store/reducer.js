const defaultState = {
  inputValue: "",
  tasks: [
    { id: 1, task: "8:00~8:05:学习Java" },
    { id: 2, task: "8:06~12:00:看一会抖音" },
    { id: 3, task: "12:00~12:40:去食堂吃饭" },
  ],
};

const  a = 'abc'
/**
 * 接受一个action 返回新的state
 * reducer函数一定是先复制一份原先的状态，然后再去修改状态的副本
 * 绝对不能直接修改状态对象 建议写成const常量
 */
const reducer = (state = defaultState, action) => {
    if(action.type==='onInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type==='addTask'){
      let newState = JSON.parse(JSON.stringify(state));
      newState.tasks.push({
        id:newState.tasks.length+1,
        task:newState.inputValue
      });
      newState.inputValue=''
      return newState;
    }
  return state;
};

export default reducer;
