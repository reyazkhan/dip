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
import Girl from '../assets/Girl.png';

const Screen2 = () => {
    return (
        <>
            <div>
                <div className="screen2Background">
                    <TopBar />
                    <Header />
                    <div className={styles.creditCardContainer}>
                        <div className={styles.creditCardBackgroundImage}>
                            {/* <img
                                src={creditCard}
                                alt="credit card"
                                // width={'100%'}
                                // style={{ zIndex: 1 }}
                                // className='creditCard'
                            /> */}
                        </div>
                        {/* <div
                        style={{
                            position: 'relative',
                            // top: '25px',
                            // top: '-50vh',
                            top: '-240px',
                            // display: 'flex',
                            // justifyContent: 'center',
                            padding: '15px',
                        }}
                    >
                        <img
                            src={shadowCreditCard}
                            alt="credit card"
                            width={'100%'}
                        />
                    </div> */}
                        <div className="paymentMode">
                            <p>
                                <span style={{ color: '#FFA047' }}>
                                    PAYMENT{' '}
                                </span>
                                MODES
                            </p>
                        </div>
                        <div className="grid">
                            <div className="cardChipBackground">
                                <div style={{ position: 'relative' }}>
                                    <img src={cardChip} alt="" width={'100%'} />
                                    <div className="cardContent">
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div className="roundedCircle">
                                                <BankNote />
                                            </div>
                                            <p className="cashMode">Cash</p>
                                        </div>
                                        <p className="payTitle">
                                            Pay with cash
                                        </p>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'end',
                                            }}
                                        >
                                            <div className="activeMode"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardChipBackground">
                                <div style={{ position: 'relative' }}>
                                    <img src={cardChip} alt="" width={'100%'} />
                                    <div className="cardContent">
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div className="roundedCircle">
                                                <Upi />
                                            </div>
                                            <p className="cashMode">UPI</p>
                                        </div>
                                        <p className="payTitle">
                                            GooglePay, PhonePe.
                                        </p>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'end',
                                            }}
                                        >
                                            <div className="unactiveMode"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardChipBackground">
                                <div style={{ position: 'relative' }}>
                                    <img src={cardChip} alt="" width={'100%'} />
                                    <div className="cardContent">
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div className="roundedCircle">
                                                <NetBanking />
                                            </div>
                                            <p className="cashMode">
                                                Net Banking
                                            </p>
                                        </div>
                                        <p className="payTitle">
                                            All Indian Banks.
                                        </p>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'end',
                                            }}
                                        >
                                            <div className="unactiveMode"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardChipBackground">
                                <div style={{ position: 'relative' }}>
                                    <img src={cardChip} alt="" width={'100%'} />
                                    <div className="cardContent">
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div className="roundedCircle">
                                                <Wallet />
                                            </div>
                                            <p className="cashMode">Wallet</p>
                                        </div>
                                        <p className="payTitle">
                                            Freecharge, Paytm
                                        </p>

                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'end',
                                            }}
                                        >
                                            <div className="unactiveMode"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        Secure and hassle-free{' '}
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
