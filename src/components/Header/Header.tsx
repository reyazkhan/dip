import React, { useState } from 'react';
import styles from './Header.module.css';
import BackArrow from '../../assets/BackArrow';
import Trophy from '../../assets/Trophy';
import Flower from '../../assets/Flower';
import Achievement from '../../assets/Achievement';

const locations: Array<string> = ['Bangalore', 'Delhi', 'Chennai'];

const Header = () => {
    const [selectedLocation, setSelectedLocation] = useState('Bangalore');

    return (
        <div className={styles.header}>
            <div className={styles.backWithSelect}>
                <div className={styles.back}>
                    <BackArrow />
                </div>
                <div className={styles.location}>
                    <p>Location</p>
                    <select>
                        {locations?.map((loc, index) => {
                            return (
                                <option value={loc} key={index}>
                                    {loc}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className={styles.achievements}>
                <div className={styles.icon}>
                    <Trophy />
                    <p className={styles.text}>50 Cities</p>
                </div>
                <div className={styles.icon}>
                    <Flower />
                    <p className={styles.text}>1 Lakh Patients</p>
                </div>
                <div className={styles.icon}>
                    <Achievement />
                    <p className={styles.text}>60 Clinics</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
