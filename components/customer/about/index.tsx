import styles from './index.module.scss';

import Image from 'next/image';

import Code from '../../../src/media/pngwing.com.png';

const About = () => {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.container}>
                <Image src={Code} alt="code" className={styles.code}/>
                <h1>About me</h1>
            </div>
        </div>
        </>
    );
}

export default About;
