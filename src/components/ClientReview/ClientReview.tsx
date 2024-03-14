import styles from './ClientReview.module.css';

const ClientReview = () => {
    return (
        <article className={`${styles.client}`}>
            <h1 className={styles.heading}>
                WHAT CLIENT <span className={styles.says}>SAYS</span>
            </h1>
            <p className={styles.info}>
                Discover the experiences that shape our story. Straight from
                those who inspire our best work
            </p>
        </article>
    );
};

export default ClientReview;
