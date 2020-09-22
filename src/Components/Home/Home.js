import React from 'react';
import Places from '../Places/Places';
import './Home.css';
const Home = () => {
    return (
        <div className='homePage'>
            <h2 style={{color:'red'}}>This is home</h2>
            <Places></Places>
        </div>
        
    );
};

export default Home;