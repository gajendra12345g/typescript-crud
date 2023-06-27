import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/authSlice';
const Todo = () => {
  const [tasks, setTasks]:any = useState([]);
  const [inputValue, setInputValue]:any = useState('');
   const dispatch = useDispatch();
   const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
      // dispatch(addTodo(inputValue)); 
    }
  };

  const handleRemoveTask = (index:any) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task:any, index:any) => (
          <TaskItem key={index}>
            {task}
            <RemoveButton onClick={() => handleRemoveTask(index)}>Remove</RemoveButton>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default Todo;
