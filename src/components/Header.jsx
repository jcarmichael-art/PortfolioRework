import NavLink from "./NavLink";
import styles from "./Header.module.css";

export default function Header()
{
    return (
        <header className={styles.container}>
        <h4 className={styles.text}>Jacob Carmichael</h4>  
        <ul className={styles.navInner}>
            <li><NavLink href="#about" label="About"/></li>
            <li><NavLink href="#skills" label="Skills"/></li>
            <li><NavLink href="#projects" label="Projects"/></li>
            <li><NavLink href="https://github.com/jcarmichael-art" label="Github"/></li>
            <li><NavLink href="https://www.instagram.com/cedar_hill_iron_works/" label="Instagram"/></li>
            <li><NavLink href="#work" label="Work History"/></li>
        </ul>
        </header>
    );
};