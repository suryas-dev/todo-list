import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: 'Learn React',
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodoContext = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider