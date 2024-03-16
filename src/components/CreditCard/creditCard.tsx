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
                    <span className={style.cardNo}>Card number</span>
                    <span className={style.cardCount}>
                        2329
                        <span>5551</span>
                        <span>2100</span>
                        <span>****</span>
                    </span>
                </div>

                <div className={style.balance}>
                    <div>
                        <span className={style.cardNo}>Current Balance</span>
                        <span className={style.cardCount}>Rs. 42,371.42</span>
                    </div>
                    <div>
                        <span className={style.cardNo}>Expire</span>
                        <span className={style.cardCount}>10/27</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreditCard;
