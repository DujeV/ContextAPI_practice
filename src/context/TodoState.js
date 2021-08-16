import React, { useReducer } from 'react';
import TodoContext from './todo_context';
import todoReducer from './todo_reducer';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo_actions';

const TodoState = props => {
  const initialState = {
    todos: [], // {id: '123', text:'some text', complete: false}
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add todo
  const addTodo = todo => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  // Toggle todo
  const toggleTodo = todoID => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };
  // Delete todo
  const deleteTodo = todoID => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
