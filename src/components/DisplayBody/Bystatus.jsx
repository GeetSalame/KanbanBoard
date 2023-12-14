import React from 'react'
import Kanbancard from '../KanbanCard/Kanbancard';
import '../DisplayBody/displaybody.css';

function Bystatus() {
    return (
        <div id='by-status'>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon"/>
                        <p className="catg-name">Done</p>
                        <p className="catg-count">5</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon'/>
                    </div>
                </div>
                <div className='cards-display'>
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon"/>
                        <p className="catg-name">Done</p>
                        <p className="catg-count">5</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon'/>
                    </div>
                </div>
                <div className='cards-display'>
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon"/>
                        <p className="catg-name">Done</p>
                        <p className="catg-count">5</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon'/>
                    </div>
                </div>
                <div className='cards-display'>
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon"/>
                        <p className="catg-name">Done</p>
                        <p className="catg-count">5</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon'/>
                    </div>
                </div>
                <div className='cards-display'>
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                </div>
            </div>
            <div>
                <div className='catg-head'>
                    <div className='catg-left'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="done-icon" className="status-icon"/>
                        <p className="catg-name">Done</p>
                        <p className="catg-count">5</p>
                    </div>
                    <div className='catg-right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" alt="add-icon" className='add-icon'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" alt="dots" className='dots-icon'/>
                    </div>
                </div>
                <div className='cards-display'>
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                    <Kanbancard />
                </div>
            </div>
        </div>
    )
}

export default Bystatus;