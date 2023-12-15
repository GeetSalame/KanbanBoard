import React, { useState } from 'react'
import Kanbancard from '../KanbanCard/Kanbancard';

function Bypriority() {

    const API_url = "https://api.quicksell.co/v1/internal/frontend-assignment";

    const myObject = {};
    const [ticketsObj, setTicketsObj] = useState([]);
    const [usersObj, setUsersObj] = useState([]);

    const getData = async () => {
        const response = await fetch(API_url); //assuming API returns JSON data   
        const data = await response.json(); //parse JSON data   
        return data;
    }
    getData()
        .then(
            data => {
                myObject.data = data;
                setTicketsObj(myObject.data.tickets);
                setUsersObj(myObject.data.users);
            }
        ).catch(error => {
            console.error(error);
        });

    const Nopriority = ticketsObj?.filter(function (element) {
        return element.priority == 0;
    });
    const Low = ticketsObj?.filter(function (element) {
        return element.priority == 1;
    });
    const Medium = ticketsObj?.filter(function (element) {
        return element.priority == 2;
    });
    const High = ticketsObj?.filter(function (element) {
        return element.priority == 3;
    });
    const Urgent = ticketsObj?.filter(function (element) {
        return element.priority == 4;
    });

    return (
        <div id='by-priority'>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/10091/10091265.png" alt="urgent-icon" className="status-icon" />
                        <p className="catg-name">Urgent</p>
                        <p className="catg-count">{Urgent?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Urgent.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3563/3563395.png" alt="high-icon" className="status-icon" />
                        <p className="catg-name">High</p>
                        <p className="catg-count">{High?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        High.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3563/3563394.png" alt="medium-icon" className="status-icon" />
                        <p className="catg-name">Medium</p>
                        <p className="catg-count">{Medium?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Medium.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3563/3563393.png" alt="low-icon" className="status-icon" />
                        <p className="catg-name">Low</p>
                        <p className="catg-count">{Low?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Low.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='status-icon' />
                        <p className="catg-name">No Priority</p>
                        <p className="catg-count">{Nopriority?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Nopriority.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Bypriority;