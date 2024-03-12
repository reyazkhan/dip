import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import FAQ from '../components/faq/faq';
import ClientReview from '../components/ClientReview/ClientReview';


const Screen1 = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <FAQ/>
            <ClientReview/>
        </div>
    );
};

export default Screen1;
