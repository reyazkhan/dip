import React, { useState } from 'react';
import styles from './DiscountCoupon.module.css';

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
        // if (couponData.length !== 3) {
        //     setCouponData([
        //         ...couponData,
        //         {
        //             offerLabel: 'OFFER',
        //             title: 'Get Rs. 100 discount on bonus fees.',
        //             code: 'BONUS100',
        //         },
        //     ]);
        // }
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
            <div
                style={{
                    width: '90%',
                    margin: '40px auto 20px auto',
                    fontSize: '14px',
                    fontWeight: 'bolder',
                    padding: '0 4px',
                }}
            >
                <p style={{ color: '#2B275A' }}>
                    <span style={{ color: '#FF8412' }}>Discount </span>Coupons
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    alignItems: 'center',
                    marginBottom: '40px',
                }}
            >
                {couponData?.map((coup, index) => {
                    return (
                        <div key={index} className={styles.couponBackground}>
                            <div className={styles.couponCard}>
                                <div className={styles.offer}>
                                    {coup.offerLabel}
                                </div>
                                <div className={styles.title}>{coup.title}</div>
                                <div className={styles.code}>
                                    <div>Use code "{`${coup.code}`}"</div>
                                    <button
                                        onClick={() => removeCoupon(index)}
                                        style={{
                                            backgroundColor: '#FF8412',
                                            borderRadius: '25px',
                                            padding: '8px 12px',
                                            border: 'none',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: 'bolder',
                                                fontSize: '10px',
                                                color: 'white',
                                            }}
                                        >
                                            REMOVE
                                        </span>
                                    </button>
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
                    marginBottom: '20px',
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
