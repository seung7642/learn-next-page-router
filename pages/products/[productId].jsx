import { ProductService } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ productDetail }) {
  const headerTitle = '상품 상세 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfo productDetail={productDetail}></ProductInfo>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('## productId : ', context.params.productId);
  const id = context.params.productId;

  // 아래 async/await 문법을 babel 트랜스파일러로 확인해보면 promise 문법을 사용하는걸 확인할 수 있습니다.
  const { data } = await ProductService.getById(id);

  return {
    props: {
      productDetail: data,
    },
  };
}
