import ProductList from '@/components/ProductList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
  return (
    <div>
      <ProductList></ProductList>
    </div>
  );
}

export default ProductPage;
