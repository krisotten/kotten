import styles from './Footer.module.css';

// Social Media Icons
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SocialIcon } from 'react-social-icons';

import { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState("");

    return (
        <>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.signUp}>
                        <p className={styles.footerText}>Sign up for our mailing list!</p>
                        <div className={styles.emailInput}>
                            <input className={styles.rectangle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <ArrowForwardIcon className={`${styles.hvrGrow}`} />
                        </div>
                    </div>
                    <div className={styles.socials} >
                        <SendIcon className={`${styles.mail} ${styles.hvrGrow}`} fontSize='large' />
                        <SocialIcon url="https://tiktok.com" bgColor="transparent" className={`${styles.hvrGrow}`} />
                        <InstagramIcon className={`${styles.instagram} ${styles.hvrGrow}`} fontSize='large' />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;