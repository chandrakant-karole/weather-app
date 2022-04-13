import React from 'react'

export default function Search() {
    return (
        <>
            <div className='search-box'>
                <h2>Weather Forecast</h2>
                <p>Enter the location name to see the weather Details</p>
                <div className='search-input-box'>
                    <input type="text" placeholder='Enter City Name'/>
                    <button>Enter</button>
                </div>
            </div>
        </>
    )
}
