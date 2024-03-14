import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import FAQ from '../components/faq/faq';
import DetailCard from '../components/DetailCard/DetailCard';
import ClientReview from '../components/ClientReview/ClientReview';
import AdSection from '../components/AdSection/AdSection';

import DiscountCoupon from '../components/DiscountCoupon/DiscountCoupon';
import CouponBackground from '../assets/CouponBackground';

const Screen1 = () => {
    return (
        <div>
            {/* <TopBar />
            <Header /> */}

            <DetailCard />
            <DiscountCoupon />
            <FAQ />
            {/* <ClientReview /> */}
            <AdSection />
        </div>
    );
};

export default Screen1;
