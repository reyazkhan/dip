import BankNote from '../../assets/BankNote';
import shadowCreditCard from '../../assets/images/shadowCreditCard.png';
import style from './CreditCard.module.css';

const CreditCard = () => {
    return (
        <>
            <div className={style.card}>
                <div className={style.logHolder}>
                    <div className={style.cardlog}>Master Card</div>
                    <div className={style.circleDiv}>
                        <div className={style.circle1}></div>
                        <div className={style.circle2}></div>
                    </div>
                </div>

                <div className={style.contentData}>
                    <p className={style.cardNo}>Card number</p>
                    <div
                        style={{
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <p className={style.cardCount}>2329</p>
                        <p className={style.cardCount}>5551</p>
                        <p className={style.cardCount}>2100</p>
                        <p className={style.cardCount}>****</p>
                    </div>
                </div>

                <div className={style.balance}>
                    <div
                        className={style.justifyBetween}
                        style={{ width: '90%' }}
                    >
                        <p className={style.cardNo}>Current Balance</p>
                        <p className={style.cardNo}>Expire</p>
                    </div>
                    <div
                        className={style.justifyBetween}
                        style={{ width: '90%' }}
                    >
                        <p className={style.cardCount}>Rs. 42,371.42</p>
                        <p className={style.cardCount}>10/27</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreditCard;
