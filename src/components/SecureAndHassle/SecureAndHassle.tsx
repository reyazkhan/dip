import style from './SecureAndHassle.module.css'
import girl from  '../../assets/Girl.png';

const SecureAndHassle = () => {
    return (
        <div className={style.holder}>
        <div className={style.content}>
            <span className={style.heading}>
                Secure and Hassle-free{' '}
                <span className={style.highlight}>ways to pay</span>
            </span>
            <span className={style.discription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus.
            </span>
        </div>
        <img src={girl} className={style.girlImg} />
    </div> 
    )
}

export default SecureAndHassle