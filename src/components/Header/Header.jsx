import React, { useEffect } from 'react';
import '../Header/header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleMenu2Visibility = () => {
        let menu2 = document.getElementById("menu2");
        let icon2 = document.getElementById("h-menu-icon2");
        // if(menu2.style.display == "none"){
        //     menu2.style.display = "flex";
        // }else{
        //     menu2.style.display = "none";
        // }
        if (menu2.style.display == "none") {
            menu2.style.display = "flex"
            icon2.style.transform = "rotate(180deg)";
        } else {
            menu2.style.display = "none";
            icon2.style.transform = "rotate(0deg)";
        }
    }

    const handleNavigation = (e) => {
        navigate(`/${e.target.value}`);
        let menu2 = document.getElementById("menu2");
        let icon2 = document.getElementById("h-menu-icon2");
        menu2.style.display = "none";
        icon2.style.transform = "rotate(0deg)";
    }

    const handleOrdering = (e) => {
        localStorage.setItem("Ordering", e.target.value);
    }

    useEffect(() => {
        let loc = window.location.href.split('/').slice(-1)[0];
        document.getElementById("groupingElement").value = loc;
        localStorage.getItem("Ordering")? document.getElementById("orderingElement").value = localStorage.getItem("Ordering"):<></>;
    }, [])

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
                    <select name="" id="groupingElement" onChange={(e) => handleNavigation(e)}>
                        <option value="" className='other'>Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div id="ordering">
                    <p>Ordering</p>
                    <select name="" id="orderingElement" onChange={(e) => handleOrdering(e)}>
                        <option value="Priority">Priority</option>
                        <option value="Title">Title</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Header;