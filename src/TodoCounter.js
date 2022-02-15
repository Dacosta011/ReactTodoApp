import React from 'react';
import "./TodoCounter.css"

function TodoCounter({total, finish}) {
  return(
    <div className='count-container'>
      <h1 className='count-section-title'>Task List</h1>
      <p className='count-section-counter'>Has {finish} out of {total} tasks</p>
    </div>
  );
}

export default TodoCounter;
