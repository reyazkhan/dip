// import '../index.css';
import styles from '../styles/Screen2.module.css';
import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import creditCard from '../assets/images/creditCard.png';
import cardChip from '../assets/images/cardChip.png';
import BankNote from '../assets/BankNote';
import Upi from '../assets/Upi';
import NetBanking from '../assets/NetBanking';
import Wallet from '../assets/Wallet';
import LeftArrorTranc from '../assets/LeftArrorTranc';
import RightArrorWhite from '../assets/RightArrorWhite';
import Girl from '../assets/svg/Girl.svg';
import CreditCard from '../components/CreditCard/CreditCard';
import MasterCardLeftIcon from '../assets/masterCardLeftIcon';
import MasterCardRightIcon from '../assets/masterCardRightIcon';
import creditCardBg from '../assets/images/creditCardBackgroundImage.png';
import CardChip from '../assets/CardChip';
import { useState } from 'react';

const Screen2 = () => {
    const paymentModeCard = [
        {
            mode: 'Cash',
            title: 'Pay with cash.',
            icon: BankNote,
        },
        {
            mode: 'UPI',
            title: 'GooglePay, PhonePe.',
            icon: Upi,
        },
        {
            mode: 'NetBanking',
            title: 'All Indian Banks.',
            icon: NetBanking,
        },
        {
            mode: 'Wallet',
            title: 'Freecharge, Paytm',
            icon: Wallet,
        },
    ];
    const [paymentModelSelectedIndex, setPaymentSelectedIndex] = useState(0);

    return (
        <>
            <div className="fontFamily">
                <div className="screen2Background">
                    <TopBar />
                    <Header />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            // width: '90%',
                            // margin: '0 auto',
                            padding: '8px',
                            position: 'relative',
                            flexDirection: 'column',
                        }}
                    >
                        <CreditCard />
                        <div className="paymentMode">
                            <p>
                                <span style={{ color: '#FFA047' }}>
                                    PAYMENT &nbsp;
                                </span>
                                MODES
                            </p>
                        </div>

                        <div className={styles.grid}>
                            {paymentModeCard?.map((paymentMode, index) => {
                                return (
                                    <div
                                        style={{ position: 'relative' }}
                                        key={index}
                                        onClick={() =>
                                            setPaymentSelectedIndex(index)
                                        }
                                    >
                                        <CardChip className={styles.card} />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                width: '100%',
                                            }}
                                        >
                                            <div className={styles.cardContent}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        gap: '1rem',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <div
                                                        className={
                                                            styles.roundedCircle
                                                        }
                                                    >
                                                        {index === 0 ? (
                                                            <BankNote />
                                                        ) : index === 1 ? (
                                                            <Upi />
                                                        ) : index === 2 ? (
                                                            <NetBanking />
                                                        ) : (
                                                            <Wallet />
                                                        )}
                                                    </div>
                                                    <p
                                                        className={
                                                            styles.cashMode
                                                        }
                                                    >
                                                        {paymentMode.mode}
                                                    </p>
                                                </div>
                                                <p className={styles.payTitle}>
                                                    {paymentMode.title}
                                                </p>

                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'end',
                                                    }}
                                                >
                                                    <div
                                                        className={
                                                            index ===
                                                            paymentModelSelectedIndex
                                                                ? styles.activeMode
                                                                : styles.unactiveMode
                                                        }
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="arrow">
                        <LeftArrorTranc />
                        <RightArrorWhite />
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="content">
                    <span className="heading">
                        Secure and Hassle-free{' '}
                        <span className="highlight">ways to pay</span>
                    </span>
                    <span className="discription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus.
                    </span>
                </div>
                <img src={Girl} className="girlImg" />
            </div>
        </>
    );
};

export default Screen2;
