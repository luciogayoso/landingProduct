"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/NavBar";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import ProductCarousel from "./components/ProductCarousel";
import Section from "./components/Secction";
import ProductCard from "./components/ProductosCard";
import BackToTopButton from "./components/BackToTopButton";
import Video from "./components/Video";

export default function Home() {


 const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const productAnimation = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <div className={styles.page} >
      <Video />
      <main className={styles.main}>
        <section> 
          <Navbar />
        </section>
        <div className={styles.esapcio}></div>
        <Section id="servicios" title="">
          {offset >= 500 && offset < 1300 ?
       
          <motion.div
          className={styles.servicios}
          initial="hidden"
          animate="visible"
          variants={productAnimation}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
           
          <motion.div className={styles.servicios}>
          <ProductCard
            title="Corte Unixes"
            description="Corte de cabello para hombres y mujeres"
            imageUrl="/corte.jpg"
          />
          </motion.div>

          <motion.div variants={productAnimation}>
          <ProductCard
            title="Coloración"
            description="Coloración profecional de todos los estilos"
            imageUrl="/coloracion.jpg"
          />
          </motion.div>

          <motion.div variants={productAnimation}>
          <ProductCard
            title="Peinados"
            description="Peinados para toda ocasión y estilo"
            imageUrl="/peinados.jpg"
          />
          </motion.div>
          </motion.div>
          : <div style={{height:"100vw"}}></div>}
        </Section>
        
        <Section id="promociones" title={styles.section}>
          <ProductCarousel />
        </Section>
        <Section id="nosotros" title="Nosotros">
          <p>Somos una empresa dedicada a la venta de productos electrónicos de alta calidad.</p>
        </Section>
        
        <Section id="contacto" title="Contacto">
          <p>Puedes contactarnos a través de nuestro correo electrónico: contacto@empresa.com</p>
        </Section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      {offset > 100 ? <BackToTopButton /> : null}
    </div>
  );
}