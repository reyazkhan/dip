import React from 'react';
import styles from './DetailCard.module.css';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header';
import Teeth from '../../assets/Teeth';
import DashedLine from '../../assets/DashedLine';
import ProfileLogo from '../../assets/ProfileLogo';
import BackArrow from '../../assets/BackArrow';
import CouponBackground from '../../assets/CouponBackground';

const DetailCard = () => {
    return (
        <>
            <div className={styles.container}>
                <TopBar />
                <Header />
                <div className={styles.containerCard}>
                    <div
                        style={{
                            padding: '8px',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '4px',
                                paddingBottom: '10px',
                            }}
                        >
                            <div className={styles.roundedCircle1}>
                                <Teeth />
                            </div>
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '80px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    <div className={styles.patientDetailKey}>
                                        <p>Patient</p>
                                        <p>Appointment ID</p>
                                        <p>Service</p>
                                        <p>Date & Time</p>
                                    </div>
                                    <div className={styles.patientDetailValue}>
                                        <p>John Watson</p>
                                        <p>DH73FH983RFDBN</p>
                                        <p>Dental Braces</p>
                                        <p>21 Feb, 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <DashedLine />
                        </div>
                        <div className={styles.drDetails}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <ProfileLogo />
                                <div className={styles.drName}>
                                    <p>Dr. Diana Cruz</p>
                                    <span>BDS, MDS</span>
                                </div>
                            </div>
                            <div className={styles.drClinic}>
                                <h1>Dental Clinic</h1>
                                <p>12/2, Mathura Road Sector</p>
                                <p>37, Faridabad - Delhi</p>
                            </div>
                            <div className={styles.location}>
                                <BackArrow />
                            </div>
                        </div>
                        <div className={styles.billingDetails}>
                            <div style={{ padding: '20px' }}>
                                <h1
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 'bolder',
                                    }}
                                >
                                    <span style={{ color: '#FFA047' }}>
                                        BILLING{' '}
                                    </span>
                                    DETAILS
                                </h1>
                                <div className={styles.bill}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                            paddingTop: '6px',
                                        }}
                                    >
                                        <p>Consultation Fees</p>
                                        <p>Service Fees</p>
                                        <p>Technology Fees</p>
                                        <p>Test</p>
                                        <p>Surgery</p>
                                        <p>Medicine</p>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                            paddingTop: '6px',
                                        }}
                                    >
                                        <p className={styles.billingValue}>
                                            Rs. 1000
                                        </p>
                                        <p className={styles.billingValue}>
                                            Rs. 100
                                        </p>
                                        <p className={styles.billingValue}>
                                            Rs. 100
                                        </p>
                                        <p className={styles.billingValue}>-</p>
                                        <p className={styles.billingValue}>-</p>
                                        <p className={styles.billingValue}>-</p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '10px',
                                        display: 'flex',
                                        paddingTop: '4px',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '4px',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '4px',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <p>Coupons : </p>
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '4px',
                                            }}
                                        >
                                            <div
                                                className={styles.chip}
                                                style={{
                                                    borderRadius: '25px',
                                                    display: 'flex',
                                                    padding: '4px 8px',
                                                    gap: '4px',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: '#FF8412',
                                                    }}
                                                >
                                                    Health 100
                                                </p>
                                                <p style={{ color: 'white' }}>
                                                    X
                                                </p>
                                            </div>
                                            <div
                                                className={styles.chip}
                                                style={{
                                                    borderRadius: '25px',
                                                    display: 'flex',
                                                    padding: '4px 8px',
                                                    gap: '4px',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: '#FF8412',
                                                    }}
                                                >
                                                    Consult 100
                                                </p>
                                                <p style={{ color: 'white' }}>
                                                    X
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: '#FF5151',
                                            fontSize: '10px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        -Rs. 200
                                    </p>
                                </div>
                                <DashedLine color="white" />
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        fontSize: '12px',
                                        fontWeight: 'bolder',
                                        paddingTop: '8px',
                                    }}
                                >
                                    <p>Payable Amount</p>
                                    <p>Rs. 1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default DetailCard;
