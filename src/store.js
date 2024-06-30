import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        deleteTaskAll: () => [],
        checkTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.check = !task.check;
            }
        },
        updateTask: (state, action) => {
            const { id, body, date } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.body = body;
                task.date = date;
                task.check = false;
            }
        }
    }
});

export const { addTask, deleteTask, deleteTaskAll, checkTask, updateTask } = tasksSlice.actions;

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
});

store.subscribe(() => {
    localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export default store;
