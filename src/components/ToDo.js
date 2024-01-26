import React, { useState } from 'react';

const ToDo = ({ text, updateMode, deleteToDo }) => {
  const [completed, setCompleted] = useState(false);

  const handleUpdate = () => {
    updateMode();
  };

  const handleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <div className="text">{text}</div>
      <div className="icons">
        <button className='complete-button' onClick={handleComplete}>
          {completed ? 'Undo Complete' : 'Complete'}
        </button>
        <button className='update-button' onClick={handleUpdate}>Update</button>
        <button className='delete-button' onClick={deleteToDo}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
