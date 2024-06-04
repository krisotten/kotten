import styles from './shipping.module.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Shipping() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Contact</p>
                        <p className={styles.required}>* Required</p>
                    </div>
                    <div className={styles.rectangle}>
                        <p className={styles.boxText}>Email *</p>
                    </div>
                </div>

                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Shipping Address</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <div className={styles.address}>
                        <div className={styles.twoRect}>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>First Name *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>Last Name *</p>
                            </div>
                        </div>

                        <div className={styles.rectangle}>
                            <p className={styles.boxText}>Address *</p>
                        </div>

                        <div className={styles.rectangle}>
                            <p className={styles.boxText}>Apartment, suite, etc. (optional) *</p>
                        </div>

                        <div className={styles.threeRect}>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>City *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>State *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>Zip *</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <ArrowBackIcon className={styles.backButton} />
                    <button className={styles.button}>Continue to Billing</button>
                </div>

            </div>

            <div class={styles.priceContainer} ></div>

        </div>
    );
}