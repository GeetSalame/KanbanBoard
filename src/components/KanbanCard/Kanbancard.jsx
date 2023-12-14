import React from 'react';
import '../KanbanCard/kanbancard.css';

function Kanbancard() {
  return (
    <div id='kanbancard'>
        <div id='card-top'>
            <p id='ticket-id'>CAM-4</p>
            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" id='user-icon'/>
        </div>
        <div id='card-middle'>
            <p id='card-title'>Add Multi-Language Support - Enable multi-language support within the...</p>
        </div>
        <div id='card-bottom'>
            <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" className='dots-icon'/>
            <p id="card-tag">Feature Request</p>
        </div>
    </div>
  )
}

export default Kanbancard;