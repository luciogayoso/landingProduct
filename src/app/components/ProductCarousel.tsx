'use client'

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-flip';
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={styles.img} src="/product1.jpg" alt="Product 1" width={650} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src="/product2.jpg" alt="Product 2" width={650} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src="/product3.jpg" alt="Product 3" width={650} height={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductCarousel;