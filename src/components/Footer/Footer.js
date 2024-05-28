import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.footerText}>Sign up for our mailing list!</p>
                <div className={styles.rectangle} />
            </footer>
        </>
    );
}

export default Footer;