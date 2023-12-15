import React, { useState } from 'react';
import Kanbancard from '../KanbanCard/Kanbancard';
import '../DisplayBody/displaybody.css';

function Byuser() {

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

    const User1 = ticketsObj?.filter(function (element) {
        return element.userId == "usr-1";
    });
    const User2 = ticketsObj?.filter(function (element) {
        return element.userId == "usr-2";
    });
    const User3 = ticketsObj?.filter(function (element) {
        return element.userId == "usr-3";
    });
    const User4 = ticketsObj?.filter(function (element) {
        return element.userId == "usr-4";
    });
    const User5 = ticketsObj?.filter(function (element) {
        return element.userId == "usr-5";
    });

    function getUsername(userId) {
        var userObj = usersObj?.filter(function (element) {
            return element.id == userId;;
        });
        // console.log(userObj[0].name)
        return userObj[0]?.name;
    }

    return (
        <div id='by-user'>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" className='status-icon' />
                        <p className="catg-name">{getUsername("usr-1")}</p>
                        <p className="catg-count">{User1?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        User1.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" className='status-icon' />
                        <p className="catg-name">{getUsername("usr-2")}</p>
                        <p className="catg-count">{User2?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        User2.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" className='status-icon' />
                        <p className="catg-name">{getUsername("usr-3")}</p>
                        <p className="catg-count">{User3?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        User3.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" className='status-icon' />
                        <p className="catg-name">{getUsername("usr-4")}</p>
                        <p className="catg-count">{User4?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        User4.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon" className='status-icon' />
                        <p className="catg-name">{getUsername("usr-5")}</p>
                        <p className="catg-count">{User5?.length}</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon' />
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon' />
                    </div>
                </div>
                <div className='cards-display'>
                    {
                        User5.map((card) =>
                            <Kanbancard cardObj={card} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Byuser;