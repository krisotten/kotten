import styles from './shipping.module.css';

export default function Shipping() {
    return (
        <div className={styles.container}>
            <div className={styles.textWidth} >
                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Contact</p>
                        <p className={styles.required}>*Required</p>
                    </div>
                    <div className={styles.rectangle}>
                        <p className={styles.boxText}>Email*</p>
                    </div>
                </div>
            </div>

            <div class={styles.priceContainer} >

            </div>
        </div>
    );
}