import ProfileImg from '../../assets/ProfileImg'
import ComasImg from '../../assets/ComasImg'
import style from './ClientReview.module.css'
import LeftArror from '../../assets/LeftArror'
import RightArror from '../../assets/RightArror'
import { useRef } from 'react'

const ClientReview = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const showPrevious = (data: string) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 100;
        }
    }

    const showNext = (data: string) => {
       if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 80;
        }
    }

    return(
        <article className={style.client}>
            <div className={style.headingHolder}>
                <h1 className={style.heading}>WHAT CLIENT <span className={style.says}>SAYS</span></h1>
                <span  className={style.info}>Discover the experiences that shape our story. Straight from those who inspire our best work</span>
            </div>
            <div  className={style.testimonials} ref={scrollContainerRef}>
                <div className={style.detailedInfo}>
                    <ComasImg/>
                    <span className={style.detailContent}> <span className={style.highLight}>Braces as an adult?</span> Doc Steve transformed my snaggletooth grin into a smile I can't stop showing off! Friendly clinic, clear braces, 18 months - now I'm beaming with confidence. Thank you, Dr. Steve! (P.S. My cat is adjusting.)</span>
                    <ProfileImg/>
                    <div className={style.profileData}>
                        <span className={style.username}>Peter Thomson</span>
                        <span className={style.profileType}>Patients</span>
                    </div>
                </div>
                <div className={style.detailedInfo}>
                    <ComasImg/>
                    <span className={style.detailContent}> <span className={style.highLight}>Braces as an adult?</span> Doc Steve transformed my snaggletooth grin into a smile I can't stop showing off! Friendly clinic, clear braces, 18 months - now I'm beaming with confidence. Thank you, Dr. Steve! (P.S. My cat is adjusting.)</span>
                    <ProfileImg/>
                    <div className={style.profileData}>
                        <span className={style.username}>Peter Thomson</span>
                        <span className={style.profileType}>Patients</span>
                    </div>
                </div>
            </div>
            <div className={style.arrors}>
                    <LeftArror className={style.left}  onClick={showPrevious} />
                    <LeftArror className={style.right} onClick={showNext}/>
                </div>
           
        </article>
    )
}

export default ClientReview