import React from 'react'
import Navbar from '../Navbar'
import './events.css'
import Divider from '../Divider'

export default function Events() {
    const Do = () => {
    };
    return (
        <div id='event'>
            <Navbar></Navbar>

            <div className="divider-div-event" style={{ background: "black" }}>
                <Divider text={"E V E N T S"} />
            </div>

            <div style={{ height: "20px", background: "black" }}>

            </div>
            <div className="e-cont">

                <div className="e-event">
                    <img src="/events/image_3.png" alt="" />
                    <a onClick={Do}>SHOW MORE</a>
                    <h1>A T H E L E T I C S</h1>

                </div>
                <div className="e-event">
                    <img src="/events/image_3.png" alt="" />
                    <a onClick={Do}>SHOW MORE</a>
                    <h1>A T H E L E T I C S</h1>
                </div>
                <div className="e-event">
                    <img src="/events/image_3.png" alt="" />
                    <a onClick={Do}>SHOW MORE</a>
                    <h1>A T H E L E T I C S</h1>
                </div>
                <div className="e-event">
                    <img src="/events/image_3.png" alt="" />
                    <a onClick={Do}>SHOW MORE</a>
                    <h1>A T H E L E T I C S</h1>
                </div>
            </div>


        </div >
    )
}
