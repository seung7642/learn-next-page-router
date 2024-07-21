import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { ProductService } from '@/api';

function ProductList() {
  const [products, setProducts] = useState();

  useState(() => {
    ProductService.getAll().then(response => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      <li>
        {products &&
          products.map(product => {
            return (
              <li key={product.id} className={styles.item}>
                <Link href={`products/${product.id}`}>
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={250}
                    alt={product.name}
                  ></Image>
                  <div>{product.name}</div>
                </Link>
              </li>
            );
          })}
      </li>
    </ul>
  );
}

export default ProductList;
