import styles from './Footer.module.css';

// Social Media Icons
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.signUp}>
                        <p className={styles.footerText}>Sign up for our mailing list!</p>
                        <div className={styles.rectangle} />
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