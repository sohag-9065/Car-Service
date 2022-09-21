import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';

import Services from '../Services/Services'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
         
        </>
    );
};

export default Home;