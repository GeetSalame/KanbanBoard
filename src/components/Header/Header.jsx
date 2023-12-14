import React from 'react';
import '../Header/header.css'


const handleMenu2Visibility = () => {
    let menu2 = document.getElementById("menu2");
    let icon2 = document.getElementById("h-menu-icon2");
    // if(menu2.style.display == "none"){
    //     menu2.style.display = "flex";
    // }else{
    //     menu2.style.display = "none";
    // }
    if (menu2.style.display == "none"){
        menu2.style.display = "flex"
        icon2.style.transform = "rotate(180deg)";
    }else {
        menu2.style.display = "none";
        icon2.style.transform = "rotate(0deg)";
    }
}

function Header() {
    return (
        <div id='header'>
            <button className='btn1' id='displaybtn' onClick={handleMenu2Visibility}>
                <img src="https://cdn-icons-png.flaticon.com/512/2989/2989860.png" alt="menu" id='h-menu-icon1' />
                Display
                <img src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" alt="drop-down" id='h-menu-icon2' />
            </button>

            <div id="menu2">
                <div id="grouping">
                    <p>Grouping</p>
                    <select name="" id="">
                        <option value="Status" className='other'>Status</option>
                        <option value="User">User</option>
                        <option value="Priority">Priority</option>
                    </select>
                </div>
                <div id="ordering">
                    <p>Ordering</p>
                    <select name="" id="">
                        <option value="Priority">Priority</option>
                        <option value="Title">Title</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Header;