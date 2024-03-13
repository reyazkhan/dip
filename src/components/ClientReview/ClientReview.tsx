import ProfileImg from '../../assets/ProfileImg';
import ComasImg from '../../assets/ComasImg';
import style from './ClientReview.module.css';
import LeftArror from '../../assets/LeftArrorTranc';
import RightArror from '../../assets/RightArrorWhite';
import { useRef, useState } from 'react';

const ClientReview = () => {
    const [active, setActive] = useState<number>(2);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const showPrevious = (data: string) => {
        setActive(1);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 270;
        }
    };

    const showNext = (data: string) => {
        setActive(2);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 270;
        }
    };

    return (
        <article className={`${style.client} ${style.fontKumbSans}`}>
            <h1 className={style.heading}>
                WHAT CLIENT <span className={style.says}>SAYS</span>
            </h1>
            <p className={style.info}>
                Discover the experiences that shape our story. Straight from
                those who inspire our best work
            </p>
            <div className={style.testimonials} ref={scrollContainerRef}>
                <div className={style.detailedInfo}>
                    <ComasImg />
                    <span className={style.detailContent}>
                        {' '}
                        <span className={style.highLight}>
                            Braces as an adult?
                        </span>{' '}
                        Doc Steve transformed my snaggletooth grin into a smile
                        I can't stop showing off! Friendly clinic, clear braces,
                        18 months - now I'm beaming with confidence. Thank you,
                        Dr. Steve! (P.S. My cat is adjusting.)
                    </span>
                    <ProfileImg />
                    <div className={style.profileData}>
                        <span className={style.username}>Peter Thomson</span>
                        <span className={style.profileType}>Patients</span>
                    </div>
                </div>
                <div className={style.detailedInfo}>
                    <ComasImg />
                    <span className={style.detailContent}>
                        {' '}
                        <span className={style.highLight}>
                            Braces as an adult?
                        </span>{' '}
                        Doc Steve transformed my snaggletooth grin into a smile
                        I can't stop showing off! Friendly clinic, clear braces,
                        18 months - now I'm beaming with confidence. Thank you,
                        Dr. Steve! (P.S. My cat is adjusting.)
                    </span>
                    <ProfileImg />
                    <div className={style.profileData}>
                        <span className={style.username}>Peter Thomson</span>
                        <span className={style.profileType}>Patients</span>
                    </div>
                </div>
            </div>
            <div className={style.arrors}>
                <LeftArror
                    className={`${active === 1 ? style.left : style.left && style.nonActive}`}
                    onClick={showPrevious}
                />
                <LeftArror
                    className={`${active === 2 ? style.right : style.nonActiveRight}`}
                    onClick={showNext}
                />
            </div>
        </article>
    );
};

export default ClientReview;
