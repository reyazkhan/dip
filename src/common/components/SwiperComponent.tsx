import React, { useEffect, useRef, useState } from 'react';
import styles from './SwiperComponent.module.css';
import { renderToString } from 'react-dom/server';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import Navigation from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// import './SwiperComponent.module.css';
// import '../../index.css';
import LeftArrorTranc from '../../assets/LeftArrorTranc';
import RightArrorWhite from '../../assets/RightArrorWhite';
import BackArrow from '../../assets/BackArrow';
import ProfileImg from '../../assets/ProfileImg';
import ComasImg from '../../assets/ComasImg';
// import { PaginationOptions } from 'swiper/types';
// import Pagination from 'swiper';

// SwiperCore.use([Navigation]);

const SwiperComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const swiperRef = useRef(null);

    // const pagination: PaginationOptions = {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                className={styles.swiper}
                ref={swiperRef}
                // pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className={styles.detailedInfo}>
                        <ComasImg />
                        <span className={styles.detailContent}>
                            {' '}
                            <span className={styles.highLight}>
                                Braces as an adult?
                            </span>{' '}
                            Doc Steve transformed my snaggletooth grin into a
                            smile I can't stop showing off! Friendly clinic,
                            clear braces, 18 months - now I'm beaming with
                            confidence. Thank you, Dr. Steve! (P.S. My cat is
                            adjusting.)
                        </span>
                        <div className={styles.profileData}>
                            <ProfileImg />
                            <div className={styles.profile}>
                                <span className={styles.username}>
                                    Peter Thomson
                                </span>
                                <span className={styles.profileType}>
                                    Patients
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.detailedInfo}>
                        <ComasImg />
                        <span className={styles.detailContent}>
                            {' '}
                            <span className={styles.highLight}>
                                Braces as an adult?
                            </span>{' '}
                            Doc Steve transformed my snaggletooth grin into a
                            smile I can't stop showing off! Friendly clinic,
                            clear braces, 18 months - now I'm beaming with
                            confidence. Thank you, Dr. Steve! (P.S. My cat is
                            adjusting.)
                        </span>
                        <div className={styles.profileData}>
                            <ProfileImg />
                            <div className={styles.profile}>
                                <span className={styles.username}>
                                    Peter Thomson
                                </span>
                                <span className={styles.profileType}>
                                    Patients
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.cardSliderBtnGroup}>
                <div
                    className={`${styles.roundedBtnWithCenterLogo} ${activeIndex === 1 ? styles.sliderActiveBtn : styles.sliderUnActiveBtn}`}
                    onClick={() => {
                        // @ts-ignore
                        swiperRef.current.swiper.slidePrev();
                        setActiveIndex(0);
                    }}
                >
                    <BackArrow />
                </div>
                <div
                    className={`${styles.roundedBtnWithCenterLogo} ${styles.rightRotate} ${activeIndex === 0 ? styles.sliderActiveBtn : styles.sliderUnActiveBtn}`}
                    // @ts-ignore
                    onClick={() => {
                        // @ts-ignore
                        swiperRef.current.swiper.slideNext();
                        setActiveIndex(1);
                    }}
                >
                    <BackArrow />
                </div>
            </div>
        </div>
    );
};

export default SwiperComponent;
