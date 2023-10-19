/* eslint-disable react/no-unescaped-entities */
import styles from './index.module.scss';

import Image from 'next/image';

import Code from '../../src/media/pngwing.com.png';

const About = () => {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.container} id='about'>
                <Image src={Code} alt="code" className={styles.code}/>
                <div>
                    <h1>About me</h1>
                    <p>
                        My name is Valentino Andric, and I'm a web developer who loves working with C# and the T3-stack. 
                        I'm still learning a lot, but I enjoy coding with these languages and frameworks at the moment. 
                        I'm also proficient in PHP.
                    </p>
                    <br/>
                    <p>
                        I have been coding for about 2 years now and I have learned a lot in that time, but I still don't have 
                        something that I truly master. I am currently looking for an internship to gain more experience and 
                        further expand my knowledge in the field. If you are interested in me or have an available position for an 
                        intern, please feel free to contact me. I am particularly interested in C# .NET, React, Next.js, Node.js, 
                        and PHP. While I prefer full-stack development, I am also comfortable with backend development.
                    </p>
                </div>                
            </div>
        </div>
        </>
    );
}

export default About;
