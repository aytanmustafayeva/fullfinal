import './Events.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Eventcard from './Eventcard/Eventcard'
import { Link } from 'react-router-dom'

function Events() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/events')
            .then(res => res.json())
            .then((data) => {
                setEvents(data.data)
            })
    }, [])

    return (
        <div className='event__wrapper'>
            {
                events.map(event => {
                    return (
                        <Link to={`/events/${event._id}`} event={event} key={event._id}>
                        <Eventcard event={event} key={event._id} />
                        </Link>
                    )
                })
            }

        </div>

    )
}

export default Events