import { createSlice } from '@reduxjs/toolkit';

// 初期状態用のinitialStateを別で定義
const initialState = {
  idCount: 3,
  tasks: [
    { id: 1, title: 'TASK A', completed: false },
    { id: 2, title: 'TASK B', completed: true },
    { id: 3, title: 'TASK C', completed: false },
  ],
};

export const taskSlice = createSlice({
  //Sliceの識別用の名前と初期状態
  name: 'task',
  initialState,

  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [...state.tasks, newItem];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },

    // stateの現在の値＋action.payload(入力された値)
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

// 別で呼び出して管理する為にexportする
export const { newTask, completeTask, deleteTask } = taskSlice.actions;

// 現在のstateを受け取り、stateのcounterの値をselectCountに代入している。
export const selectTasks = (state) => state.task.tasks;

// reducerをexport
export default taskSlice.reducer;
