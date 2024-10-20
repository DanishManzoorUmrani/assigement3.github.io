import React from 'react';
import Man from "../assets/man.png"
import "./Home.css"
import Homeadd from './Homeadd';
const Home = () => {
    return (
        <>
          <div className="main">
            <div className="maincontainer">
                <div className="maincontext">
                    <h1>Danish Manzoor</h1>
                    <p>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                </div>
                <div className="mainimg">
                    <img src={Man} alt="" width={"400px"} height={"400px"} />
                </div>
            </div>
            <Homeadd />
          </div>
        </>
    );
}

export default Home;
