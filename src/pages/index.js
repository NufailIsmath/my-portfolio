import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection';
import { homeObjeOne } from '../components/InfoSection/Data';
import MyProjects from '../components/MyProjects';
import QualificationSection from '../components/QualificationSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeSection />
            <InfoSection {...homeObjeOne} />
            <MyProjects />
            <QualificationSection />
        </>
    );
}

export default Home
