import IphoneImg from "../../assets/IPhone.svg"
import PlayStore from "../../assets/PlayStore.png"
import AppleStore from "../../assets/AppleStore.png"
import style  from "./AdSection.module.css"

const AdSection  = () => {
    return(
        <section className={style.section}>
            <div className={style.infoDiv}>
                <img src={IphoneImg} className={style.iphoneImg}/>
                <div className={style.info}>
                    <span className={style.heading}><span>DOWNLOAD</span> APP NOW!!</span>
                    <span className={style.infoLine}>Available now on Android & IOS Stores.</span>
                    <div className={style.storeLink}>
                    <img src={AppleStore} className={style.iphoneImg}/>
                    <img src={PlayStore} className={style.iphoneImg}/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdSection