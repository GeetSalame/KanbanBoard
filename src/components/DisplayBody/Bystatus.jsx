import React, { useEffect, useState } from 'react'
import Kanbancard from '../KanbanCard/Kanbancard';
import '../DisplayBody/displaybody.css';
// import { kanbanData } from '../../services/api';

function Bystatus() {
    const API_url = "https://api.quicksell.co/v1/internal/frontend-assignment";

    const myObject = {};
    const [ticketsObj, setTicketsObj] = useState([]);

    const getData = async () => {
        const response = await fetch(API_url); //assuming API returns JSON data   
        const data = await response.json(); //parse JSON data   
        return data;
    }
    getData()
        .then(
            data => {
                myObject.data = data;
                // ticketsObj = myObject.data.tickets;
                setTicketsObj(myObject.data.tickets);
                // console.log(ticketsObj);
            }
        ).catch(error => {
            console.error(error);
        });


    const Inprogress = ticketsObj?.filter(function (element) {
        return element.status == "In progress";
    });
    var Todo = ticketsObj?.filter(function (element) {
        return element.status == "Todo";
    });
    var Done = ticketsObj?.filter(function (element) {
        return element.status == "Done";
    });
    var Canceled = ticketsObj?.filter(function (element) {
        return element.status == "Canceled";
    });
    var Backlog = ticketsObj?.filter(function (element) {
        return element.status == "Backlog";
    });

    return (
        <div id='by-status'>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/10091/10091265.png" alt="backlog-icon" className="status-icon" />
                        <p className="catg-name">Backlog</p>
                        <p className="catg-count">{Backlog?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Backlog.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5460/5460873.png" alt="inprogress-icon" className="status-icon" />
                        <p className="catg-name">In progress</p>
                        <p className="catg-count">{Inprogress?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Inprogress.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/808/808569.png" alt="todo-icon" className="status-icon" />
                        <p className="catg-name">Todo</p>
                        <p className="catg-count">{Todo?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Todo.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/660/660252.png" alt="canceled-icon" className="status-icon" />
                        <p className="catg-name">Canceled</p>
                        <p className="catg-count">{Canceled?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Canceled.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon" />
                        <p className="catg-name">Done</p>
                        <p className="catg-count">{Done?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        Done.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Bystatus;