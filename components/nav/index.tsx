import styles from "./index.module.scss";

import Image from "next/image";
import Pfp from "../../src/media/pfp.jpg";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>Valentino Andric</h1>
          </div>

          <div className={styles.middle}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <a
              href="https://www.linkedin.com/in/valentino-andric-04a4bb267/"
              target="_blank"
            >
              <AiFillLinkedin className={styles.socialmedia} />
            </a>
            <a href="https://github.com/vnandric" target="_blank">
              <AiFillGithub className={styles.socialmedia} />
            </a>
          </div>
        </div>
      </div>

      {/* background image and I make it darker with an overlay */}
      <div className={styles.img_overlay}>
        <Image src={Pfp} alt="pfp" className={styles.pfp} />
        <div className={styles.overlay}></div>
      </div>
    </>
  );
}
