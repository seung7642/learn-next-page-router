import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState();

  useState(() => {
    axios.get('http://localhost:4000/products').then(response => {
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
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={250}
                  alt={product.name}
                ></Image>
                <div>{product.name}</div>
              </li>
            );
          })}
      </li>
    </ul>
  );
}

export default ProductList;
