import styles from './index.module.scss';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    
    return (
        <>
            <div className={styles.container} id='footer'>
                <footer>
                    <div className={styles.left}>
                        <h1>Contact</h1>
                        <p>
                            If you are interested or have any questions, you can send an email to valentinoandric200425@gmail.com, 
                            or you can visit any of my social media platforms.
                        </p>
                    </div>

                    <div className={styles.right}>
                            <a href="https://www.linkedin.com/in/valentino-andric-04a4bb267/" target='_blank'><AiFillLinkedin className={styles.socialmedia}/></a>
                            <a href="https://github.com/vnandric" target='_blank'><AiFillGithub className={styles.socialmedia}/></a>                       
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;