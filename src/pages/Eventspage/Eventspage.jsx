import Events from '../../components/Main/Eventspage/Events/Events';
import Filtering from '../../components/Main/Eventspage/Filtering/Filtering';
import './Eventspage.css'


function Eventspage() {
    return (
        <>
            <div className='title'>
                <h1>All Events</h1>
            </div>
            <Filtering />
            <Events />
        </>


    )
}

export default Eventspage;