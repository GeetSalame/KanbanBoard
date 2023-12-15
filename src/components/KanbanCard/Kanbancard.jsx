import React from 'react';
import '../KanbanCard/kanbancard.css';

function Kanbancard(props) {
  // console.log(props)
  return (
    <div id='kanbancard'>
        <div id='card-top'>
            <p id='ticket-id'>{props.cardObj?.id}</p>
            {(window.location.href.split('/').slice(-1)[0] != 'user')? <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" id='user-icon'/>:<></>}
        </div>
        <div id='card-middle'>
            <p id='card-title'>{props.cardObj?.title}</p>
        </div>
        <div id='card-bottom'>
            <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" className='dots-icon'/>
            <p id="card-tag">Feature Request</p>
        </div>
    </div>
  )
}

export default Kanbancard;