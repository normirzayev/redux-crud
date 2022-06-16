import React, { useEffect, useState } from 'react';
import "../style/input.css";
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, DeleteTodo, RemoveTodo } from '../actions/Index';
const Inputs = () => {
  const [inputData, SetInputData] = useState('');
  const dispatch = useDispatch();

  const {list} = useSelector(state => state.TodoReducers)
useEffect(()=>{

},[list])
  const rotate = (e) => {
    e.preventDefault();
    document.querySelector(".fa-plus").classList.add("element_rotate");
    setTimeout(() => {
      document.querySelector(".fa-plus").classList.remove("element_rotate");
    }, 500);

    dispatch(AddTodo(inputData))
    SetInputData("");
    console.log(list);
  }
  return (
    <div className='layout'> 
      <form onSubmit={rotate}>
        <h2>ADD your list Here  </h2>
        <div className="create_date">
          <div className='input_div'>
            <label htmlFor="typing"> <i className="fa-solid fa-pencil"></i> </label>
            <input 
              type="text"   
              id='typing' 
              placeholder='typing...' 
              value={inputData}
              onChange={(e) => SetInputData(e.target.value)}  
            />          
            <button type='submit'> <i className='fa fa-plus'></i> </button>
          </div>
          <div className='remove_btn'>
            <input type='button' onClick={() => dispatch(RemoveTodo())} value="Remove" /> 
          </div>
        </div>
      </form>
      {
        list.map((item, index) => (
          <div key={item.id} className="card">
            <div className="flex_element">
               <h3>{index+1}. {item.data}</h3>
              <i className="fa-solid fa-trash-can" onClick={(e) => dispatch(DeleteTodo(item.id))} ></i>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Inputs;