"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from 'react';
import { off } from "process";


const Navbar = () => {

  const [offset, setOffset] = useState(0);
  const [backgroundColor, setbackgroundColor] = useState("#f3e8e800");

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
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;