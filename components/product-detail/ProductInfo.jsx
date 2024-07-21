import React from 'react';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CartService, createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, imageUrl, price } = productDetail;

  const addCart = async () => {
    const response = await CartService.create(productDetail);
    console.log(response);
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div>
        <Image src={imageUrl} width={250} height={250} alt={name} />
      </div>
      <div className={styles.description}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addCart}>장바구니 담기</button>
      </div>
    </div>
  );
}
