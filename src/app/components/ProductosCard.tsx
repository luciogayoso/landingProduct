import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} width={200} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;