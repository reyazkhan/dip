import React, { useState } from 'react';
import styles from './DiscountCoupon.module.css';
import couponBackground from '../../assets/images/CouponBackground.png';

const DiscountCoupon = () => {
    const couponDataArray = [
        {
            offerLabel: 'OFFER',
            title: 'Get Rs. 100 discount on technology fees.',
            code: 'CONSULT100',
        },
        {
            offerLabel: 'OFFER',
            title: 'Get Rs. 100 discount on service fees.',
            code: 'HEALTH100',
        },
        {
            offerLabel: 'OFFER',
            title: 'Get Rs. 50 discount on your first order.',
            code: 'FIRST50',
        },
    ];
    const [couponData, setCouponData] = useState(couponDataArray);
    const loadMore = () => {
        if (couponData.length < couponDataArray.length) {
            setCouponData((prevCoupons) => [
                ...prevCoupons,
                couponDataArray[prevCoupons.length],
            ]);
        }
    };
    const removeCoupon = (index: number) => {
        setCouponData((prevCoupons) =>
            prevCoupons.filter((_, couponIndex) => couponIndex !== index)
        );
    };
    return (
        <div className={styles.fontKumbSans}>
            <div className={styles.discountContainer}>
                <p style={{ color: '#2B275A' }}>
                    <span style={{ color: '#FF8412' }}>Discount </span>Coupons
                </p>
            </div>
            <div className={styles.couponsContainer}>
                {couponData?.map((coup, index) => {
                    return (
                        // <div key={index} className={styles.couponBackground}>
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                padding: '0 10px',
                                width: '100%',
                            }}
                        >
                            <img src={couponBackground} alt="" width={'100%'} />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    width: '85%',
                                }}
                            >
                                <div className={styles.couponCard}>
                                    <div className={styles.offer}>
                                        {coup.offerLabel}
                                    </div>
                                    <div className={styles.title}>
                                        {coup.title}
                                    </div>
                                    <div className={styles.code}>
                                        <div>Use code "{`${coup.code}`}"</div>
                                        <button
                                            onClick={() => removeCoupon(index)}
                                            className={styles.removeBtn}
                                        >
                                            <span className={styles.btnText}>
                                                REMOVE
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px',
                }}
            >
                <button className={styles.loadMore} onClick={loadMore}>
                    LOAD MORE
                </button>
            </div>
        </div>
    );
};

export default DiscountCoupon;
