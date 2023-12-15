import React from 'react';
import notfound from '../img/pagenotfound.png';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div id='pagenotfound'>
      <h1>Page Not Found</h1>
      <img src={notfound} alt="Page Not Found" />
      <button className='btn1' onClick={()=>{navigate('/')}}>Go back to Home</button>
    </div>
  )
}

export default PageNotFound;