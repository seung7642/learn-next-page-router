import api from '@/api/axiosConfig';
import { handleApiError } from '../util/errorHandler';

const CartService = {
  async create({ id, name, imageUrl, price }) {
    try {
      // 객체 축약 문법 적용. 객체의 키와 값이 동일한 이름을 가지면 생략 가능
      return api.post('/carts', { id, name, imageUrl, price });
    } catch (error) {
      handleApiError(error, 'Error creating cart item:');
    }
  },

  async getAll() {
    try {
      return api.get('/carts');
    } catch (error) {
      handleApiError(error, 'Error fetching carts:');
    }
  },

  async remove(id) {
    try {
      return api.delete(`/carts/${id}`);
    } catch (error) {
      handleApiError(error, `Error removing cart item with id ${id}`);
    }
  },
};

export default CartService;
