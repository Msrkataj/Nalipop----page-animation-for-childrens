import React, { useState } from "react";
import Link from 'next/link';
import data from '../data/data.json';

const HeaderMenu = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        document.body.classList.remove("no-scroll");
        setActive(false);
    };

    const toggleMenu = () => {
        setActive(!active);

        if (!active) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    return (
        <>
            <div onClick={toggleMenu}>
                <div className={active ? "activeHamburger" : "hamburger"} />
            </div>
            <div className="nav">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} passHref>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
            <div className={active ? "activeSidenav " : "sidenav"}>
                <ul className="ul">
                    {data.map((item, index) => (
                        <li key={index} onClick={handleClick}>
                            <Link href={item.href} passHref className={index === 5 ? 'fifth-element' : ''}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="#opinions" passHref onClick={handleClick}>
                            OPINIE
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HeaderMenu;
