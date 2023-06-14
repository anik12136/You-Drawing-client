import React from 'react';
import Banner from '../Banner/Banner';
import TopInstructor from '../TopIsstructors/TopInstructor';
import TopClasses from '../TopClasses/TopClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopInstructor></TopInstructor>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;