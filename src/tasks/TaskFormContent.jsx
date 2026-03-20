import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TodoListContent from './TodoListContent';

const TaskFormContent = ({addTodo,updateTodo,editTodo,setEditTodo}) => {

  const{
    register, 
    handleSubmit,
    setValue,
    reset,
    formState:{errors}
  } = useForm();

  useEffect(()=> {
        if(editTodo){
            setValue("title",editTodo.title);
            setValue("description",editTodo.description);
            setValue("dueDate",editTodo.dueDate);
            setValue("assignedTo",editTodo.assignedTo);
        }
    },[editTodo]);

  const onSubmit=(data)=>{

    if(editTodo){
      updateTodo({...editTodo,...data});
      setEditTodo(null);
    }
    else{
      addTodo({
        ...data,
        id:Date.now(),
        completed:false,
        attachments: data.attachments ? data.attachments.length : 0 
      });
    }
    reset();
  }

    return (
       
        <form id="todoForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="txtTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="txtTitle" placeholder="Enter Title" {...register("title",{required:"Title is required"})}/>
          <small className="text-danger">{errors.title && errors.title.message}</small>
        </div>
           <div className="mb-3">
          <label htmlFor="txtDescription" className="form-label">Description</label>
          <textarea className="form-control" rows="3" id="txtDescription" placeholder="Enter Description" {...register("description",{required:"Description is required"})}></textarea>
          <small className="text-danger">{errors.description && errors.description.message}</small>
        </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="dueDateInput" className="form-label">Due Date</label>
              <input type="datetime-local" className="form-control" id="dueDateInput" {...register("dueDate",{required:"Due date is required",min:{value:new Date().toISOString().substring(0,16),message:"Due date cannot be set in the past"}})}/>
              <small className="text-danger">{errors.dueDate && errors.dueDate.message}</small>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="assignPerson" className="form-label">Assign to Person(Optional)</label>
              <select className="form-select" id="assignPerson" {...register("assignedTo")}>
                <option value="0">-- Select Person (optional) -- </option>
                <option value="Mattias Hellman">Mattias Hellman</option>
                <option value="Sindhuja Parthasarathy">Sindhuja Parthasarathy</option>
                <option value="Iffat Zabin">Iffat Zabin</option>
                <option value="Zackaria Azzoug">Zackaria Azzoug</option>
                <option value="Alexander Haitin">Alexander Haitin</option>
              </select>
            </div>
          </div>
           <div className="mb-3">
              <label htmlFor="fileAttachments" className="form-label me-2">Attachments (Optional)</label>
              <div className="input-group">
              <input type="file" className="form-control" id="fileAttachments" multiple  {...register("attachments")}/>
              <button  id="clearBtn" className="btn btn-outline-secondary" type="btn-close"><i className="bi bi-x-lg"></i></button>
              </div>
            </div>
            <div className="mb-3">
             <ul id="fileList" className="list-group"></ul>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary" id="btnAddTodo">
                {editTodo ? "Update Todo" : "+ Add Todo"}</button>
            </div>
      </form> 
      
   
    );
};

export default TaskFormContent;