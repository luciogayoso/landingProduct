"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from 'react';


const Navbar = () => {

  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  
  return (
    <nav className={styles.navbar} style={{backgroundColor: offset > 100 ? "#f3e8e88d" : "#f3e8e800"}}>
      <Image src="/peluqueria.png" alt="Logo" width={100} height={100} />
      <ul>
      <li><a className={offset > 100 ? styles.black : styles.white} href="#servicios">Servicios</a></li>
        <li><a className={offset > 100 ? styles.black : styles.white} href="#promociones">Promociones</a></li>
        <li><a className={offset > 100 ? styles.black : styles.white} href="#nosotros">Nosotros</a></li>
        
        <li><a className={offset > 100 ? styles.black : styles.white} href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;