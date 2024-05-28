import styles from './Footer.module.css';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.signUp}>
                    <p className={styles.footerText}>Sign up for our mailing list!</p>
                    <div className={styles.rectangle} />
                </div>
                <div className={styles.socials} >
                    <SendIcon className={styles.mail} />
                    <InstagramIcon className={styles.instagram} />
                </div>
            </footer>
        </>
    );
}

export default Footer;