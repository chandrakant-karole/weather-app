import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCloudsFill} from 'react-icons/bs'
import {IoMdArrowRoundBack} from 'react-icons/io'
export default function Weather() {
    return (
        <>
            <div className='weather-box'>
                <div className='back-link'>
                    <Link to="/"><IoMdArrowRoundBack/> back to home</Link>
                </div>
                <div className='temperature'>
                    <BsFillCloudsFill/>
                    280deg
                </div>
                <div className='other-details'>
                    <p>Humidity: 87%</p>
                    <p>Wind Speed: 1 mph</p>
                </div>
                <div>Location | London</div>
            </div>
        </>
    )
}
