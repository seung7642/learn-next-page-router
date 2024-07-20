import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ message, productInfo }) {
  const headerTitle = '상품 상세정보 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage : {message}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('## productId : ', context.params.productId);
  const id = context.params.productId;

  // 아래 async/await 문법을 babel 트랜스파일러로 확인해보면 promise 문법을 사용하는걸 확인할 수 있습니다.
  const response = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: {
      message: '서버에서 내려준 메시지',
      productInfo: response.data,
    },
  };
}
