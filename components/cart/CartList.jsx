import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CartList({ carts }) {
  const router = useRouter();

  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async cart => {
    // 1. 삭제 API 호출 (실습용으로 API 라우터 기능 사용하여 프론트엔드의 API 호출)
    const { data } = await axios.post('http://localhost:3000/api/carts', {
      id: cart.id,
    });
    alert(`${data.name} 삭제가 되었습니다.`);

    // 2. 상품 목록 갱신
    router.replace(router.asPath);
  };

  return (
    <>
      <div>
        <ul>
          {carts.map(cart => {
            return (
              <li key={cart.id} className={styles.item}>
                <div>
                  <Image
                    src={cart.imageUrl}
                    width={100}
                    height={100}
                    alt={cart.name}
                  ></Image>
                </div>
                <div className={styles.description}>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                  <button onClick={() => removeCart(cart)}>삭제하기</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>총 수량: {carts.length}</p>
        <p>총 가격: {totalPrice}</p>
      </div>
    </>
  );
}
