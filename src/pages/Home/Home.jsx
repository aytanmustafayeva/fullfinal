import React from 'react'
import SliderList from '../../components/Main/Home/SliderList/SliderList'
import Cards from '../../components/Main/Home/Cards/Cards'
import SliderList2 from '../../components/Main/SliderList2/SliderList2'
import DiscoveryEvents from '../../components/Main/Home/DiscoveryEvents/DiscoveryEvents'

const Home = () => {
    return (
        <div>
            <Cards />
            <SliderList />
            <SliderList2 />
            <DiscoveryEvents/>
        </div>
    )
}

export default Home