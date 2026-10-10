import NavLink from "./NavLink";

export default function Header()
{
    return (
        <header className="container">
        <h4 className="text">Jacob Carmichael</h4>  
        <ul className="nav-inner">
            <li><NavLink href="https://github.com/jcarmichael-art" label="Github"/></li>
            <li><NavLink href="https://www.instagram.com/cedar_hill_iron_works/" label="Instagram"/></li>
            <li><NavLink href="#skills" label="Skills"/></li>
            <li><NavLink href="#projects" label="Projects"/></li>
        </ul>
        </header>
    );
};