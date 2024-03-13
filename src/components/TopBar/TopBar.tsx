import React from 'react';
import styles from './TopBar.module.css';
import Star from '../../assets/Star';
// import './TopBar.module.css';

const TopBar = () => {
    // return <div className="topBar">TopBar</div>;
    return (
        <div className={styles.topBar}>
            <Star />
            <div className={styles.marqueeContainer}>
                <p>
                    Limited-time offer! <span>Get 50% off&nbsp;</span>on your
                    first treatment and take
                </p>
            </div>
        </div>
    );
};

export default TopBar;
