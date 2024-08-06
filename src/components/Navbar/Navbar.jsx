import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openIcon, setOpenIcon] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          My Portfolio
        </a>
        <div className={styles.menu}>
          {openIcon ? (
            <IoClose
              className={styles.close}
              onClick={() => setOpenIcon(!openIcon)}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburger}
              onClick={() => setOpenIcon(!openIcon)}
            />
          )}

          <ul
            className={`${styles.menuItems} ${openIcon && styles.openMenu}`}
            onClick={() => setOpenIcon(false)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
