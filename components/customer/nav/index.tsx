import styles from './index.module.scss';
import Image from 'next/image';

import Pfp from '../../../src/media/pfp.jpg';

const Nav = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>Valentino</h1>
                    </div>

                    <div className={styles.middle}>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className={styles.right}>
                        
                        <Image src={Pfp} alt='pfp' className={styles.socialmedia}/>
                        <Image src={Pfp} alt='pfp' className={styles.socialmedia}/>
                        <Image src={Pfp} alt='pfp' className={styles.socialmedia}/>
                    </div>
                </div>                
            </div>

            {/* background image and I make it darker with an overlay */}
            <div className={styles.img_overlay}>
                <Image src={Pfp} alt="pfp" className={styles.pfp}/>
                <div className={styles.overlay}></div>
            </div>
        </>
    )
}

export default Nav;