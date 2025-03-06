import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/NavBar";
import ProductCarousel from "./components/ProductCarousel";
import Section from "./components/Secction";
import ProductCard from "./components/ProductosCard";
import BackToTopButton from "./components/BackToTopButton";
import Video from "./components/Video";



export default function Home() {
  return (
    <div className={styles.page} >
      <Video />
      <main className={styles.main}>
        <section className={styles.esapcio}> 
          <Navbar />
        </section>
        <Section id="inicio" title={styles.section}>
          <ProductCarousel />
        </Section>
        <Section id="nosotros" title="Nosotros">
          <p>Somos una empresa dedicada a la venta de productos electrónicos de alta calidad.</p>
        </Section>
        <Section id="productos" title="Productos">
          <ProductCard
            title="Product 1"
            description="This is a description for product 1"
            imageUrl="/product1.jpg"
          />
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
      <BackToTopButton />
    </div>
  );
}