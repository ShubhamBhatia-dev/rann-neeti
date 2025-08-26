import React from 'react'
import Divider from './Divider'


export default function About() {
    return (
        <div className='about'>
            <Divider text={"ABOUT ME"} ></Divider>
            <div className="cont">
                <div className="a">
                    <img src="/poster/fest.png" alt="" srcset="" />
                </div>
                <div className="b">
                    <h3>What's up</h3>
                    <p> RANN-NEETI’ 2025 IS THE LARGEST INTER COLLEGIATE SPORTS FEST OF THE HIMALAYAS HELD AT IIT MANDI . <br></br>
                        IT BRINGS TOGETHER ATHLETES FROM VARIOUS INSTITUTIONS TO COMPETE IN A WIDE RANGE OF SPORTS. <br />
                        OUR MISSION IS TO PROMOTE SPORTSMANSHIP, TEAMWORK, AND HEALTHY COMPETITION AMONG STUDENTS WHILE PROVIDING <br /> A PLATFORM FOR THEM TO SHOWCASE THEIR ATHLETIC TALENTS. </p> </div>



            </div>
            <div className="detail">
                <div className="box anim">
                    <p className='billu'>10 K+</p>
                    <p>FOOTFALLS</p>
                </div>
                <div className="box anim-d">
                    <p className='billu'>10 +</p>
                    <p>COLLEGE</p>
                </div>
                <div className="box anim">
                    <p className='billu'>15 +</p>
                    <p>EVENTS</p>
                </div>
                <div className="box anim-d">
                    <p className='billu'>10 K+</p>
                    <p>FOOTFALLS</p>
                </div>
            </div>
        </div >
    )
}
