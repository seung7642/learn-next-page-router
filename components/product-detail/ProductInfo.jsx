import React from 'react';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CartService, createCartItem } from '@/api';

export const ALERT_MESSAGE = '장바구니에 추가되었습니다.';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, imageUrl, price } = productDetail;

  const addCart = async () => {
    const response = await CartService.create(productDetail);
    console.log(response);
    alert(ALERT_MESSAGE);
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div>
        <Image
          data-cy="product-image"
          src={imageUrl}
          width={250}
          height={250}
          alt={name}
        />
      </div>
      <div className={styles.description}>
        <p data-cy="product-name">{name}</p>
        <p data-cy="product-price">{price}</p>
        <button data-cy="cart-button" onClick={addCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
}
