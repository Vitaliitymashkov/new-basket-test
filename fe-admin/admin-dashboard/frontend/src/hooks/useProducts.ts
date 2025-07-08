import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Product } from '../types';

const API_URL = 'http://localhost:5000/api/products'; // Adjust the URL as needed

export const useProducts = () => {
  const queryClient = useQueryClient();

  const fetchProducts = async () => {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  };

  const createProduct = async (product: Product) => {
    const response = await axios.post<Product>(API_URL, product);
    return response.data;
  };

  const updateProduct = async (product: Product) => {
    const response = await axios.put<Product>(`${API_URL}/${product.id}`, product);
    return response.data;
  };

  const deleteProduct = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
  };

  const { data: products, error, isLoading } = useQuery('products', fetchProducts);

  const createMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const updateMutation = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  return {
    products,
    error,
    isLoading,
    createProduct: createMutation.mutate,
    updateProduct: updateMutation.mutate,
    deleteProduct: deleteMutation.mutate,
  };
};