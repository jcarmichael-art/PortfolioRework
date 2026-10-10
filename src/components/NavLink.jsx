import { useState } from 'react'

import styles from "./NavLink.module.css"


export default function NavLink({ href, label}) {
    const [clicked, setClicked] = useState(false);

    const openTab = label === "Github" || label === "Instagram"

    return (
        <a
        href={href}
        className={clicked ? `${styles.navBtn} ${styles.clicked} ${styles.mutedText}` : `${styles.navBtn} ${styles.mutedText}`}
        onClick={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        target={openTab ? "_blank" : undefined}
        >
            {label}
        </a>
    );
}