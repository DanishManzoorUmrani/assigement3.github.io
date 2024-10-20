import React from 'react';
import Man from "../assets/man1.png"
import Skill from "../assets/skillg.jpg"
import "./Home.css"
const Homeadd = () => {
    return (
        <>
            <div className="homemain">
                <div className="homecontainer">
                    <img src={Man} alt="" width={"400px"} height={"400px"} />
                </div>
               

                
                <div className="skillimg">
                    <h1>Full Stack Development</h1>
                    <img src={Skill} alt="" height={"100px"} width={"300px"} />
                    <p>⚡ Building responsive website front end using React-Redux
                    </p>
                    <p>
                        ⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin
                    </p>
                    <p>
                        ⚡ Creating application backend in Node, Express & Flask

                    </p>

                </div>
            </div>
        </>
    );
}

export default Homeadd;
