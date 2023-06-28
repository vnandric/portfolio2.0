import styles from './index.module.scss';

const Nav = () => {
    return (
        <>
            {/* top part of nav bar */}
            <div className={styles.top}>
                <div className={styles.left}>

                </div>

                <div className={styles.middle}>

                </div>

                <div className={styles.right}>

                </div>
            </div>

            {/* under nav bar */}
            <div className={styles.bottem}>
                <nav>
                    <ul>
                        <li> Home </li>
                        <li> About us </li>
                        <li> producten </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav;