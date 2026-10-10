import { useState } from 'react'


export default function NavLink({ href, label}) {
    const [clicked, setClicked] = useState(false);

    const openTab = label === "Github" || label === "Instagram"

    return (
        <a
        href={href}
        className={clicked ? "nav-btn clicked muted-text" : "nav-btn muted-text"}
        onClick={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        target={openTab ? "_blank" : undefined}

        >
            {label}

        </a>
    );
}