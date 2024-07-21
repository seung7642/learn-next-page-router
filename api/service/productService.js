import api from '@/api/axiosConfig';
import { handleApiError } from '../util/errorHandler';

const ProductService = {
  async getAll() {
    try {
      return api.get('/products');
    } catch (error) {
      handleApiError(error, 'Error fetching products:');
    }
  },

  async getById(id) {
    try {
      return api.get(`/products/${id}`);
    } catch (error) {
      handleApiError(error, `Error fetching product with id ${id}:`);
    }
  },
};

export default ProductService;
