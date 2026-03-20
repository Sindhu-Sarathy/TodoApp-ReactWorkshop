import React, { useEffect, useState } from 'react';
import TaskFormContent from './TaskFormContent';
import TodoListContent from './TodoListContent';

const TaskContent = () => {
    const [todos,setTodos]=useState([]);
    const [editTodo,setEditTodo]=useState(null);
    const addTodo = (todo) => {
        setTodos([...todos,{...todo,id:Date.now(),completed:false}]);
    };

    const deleteTodo=(id) =>{
        setTodos(todos.filter(t => t.id !== id));
    };

    const editTodoList = (todo) => {
        setEditTodo(todo);
    };

    const updateTodo =(updatedTodo) => {
        setTodos(todos.map(t => t.id == updatedTodo.id ? updatedTodo : t ));
    };

    const toggleComplete = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}:todo));

    };






    return (
        <div>
            <HeaderContent/>
            <hr></hr>
             <div className="container-lg" style={{width:'1000px'}}>
             <div className="bg-white border shadow-sm p-4 rounded">
                <TaskFormContent addTodo={addTodo} updateTodo={updateTodo} editTodo={editTodo} setEditTodo={setEditTodo} />
             </div>
              <TodoListContent todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodoList={editTodoList}/>
            </div>
        </div>
    );
};

const HeaderContent = () => {
     return(
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-sm-4 fw-bold text-white'><h1>Tasks</h1>
                </div>
                <div className='col-sm-4 text-center'>
                   <div class="input-group mb-3">
                        <input type="text" className="form-control border-end-0" placeholder="Search tasks..." />
                        <span class="input-group-text bg-white">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
};



export default TaskContent;