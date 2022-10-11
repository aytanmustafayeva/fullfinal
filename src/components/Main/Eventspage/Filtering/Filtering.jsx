import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Filtering.css'

const Filtering = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/events")
            .then(res => {
                setEvents(res.data.data)
            })
    }, [])
    return (
        <div className='filtering'>
            <div className='venue'>
                <select name="venue" id="venue" placeholder='Choose venue'>
                    <option defaultValue="" className='none'>Choose venue</option>
                    {
                       events.map(event=>{
                        return (
                            <option key={event._id}>{event.location}</option>
                        )
                       })
                    }
                </select>
            </div>
            <div className='date'>
                <input type="date" placeholder="Choose date" /*onFocus="(this.type='date')"*/ />
            </div>
            <div className='price'>
                <label htmlFor="price">Price from 0 to 600</label>
                <input type="range" id="price" name="price" min="0" max="600" />
            </div>
        </div>
    )
}

export default Filtering