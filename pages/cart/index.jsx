import { CartService } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';

function CartPage({ carts }) {
  const title = '장바구니 페이지';

  return (
    <div>
      <CartHeader title={title}></CartHeader>
      <CartList carts={carts}></CartList>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await CartService.getAll();

  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
