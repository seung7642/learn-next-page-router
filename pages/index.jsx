import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
  const headerTitle = '상품 목록 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductList></ProductList>
    </div>
  );
}

export default ProductPage;
