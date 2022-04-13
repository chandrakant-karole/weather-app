import React from 'react'
import { Link } from 'react-router-dom'
import error from '../error.png'
export default function Error() {
    return (
        <>
            <div className='error-box'>
                <img src={error} alt="error" />
                <p>Oops! It's look there is Error while Getting Weather Details.</p>
                <Link className='try-again' to="/">Try Again</Link>
            </div>
        </>
    )
}
