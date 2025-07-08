import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useProducts } from '../hooks/useProducts';

interface ProductFormProps {
  productId?: string;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ productId, onClose }) => {
  const { createProduct, updateProduct, getProductById } = useProducts();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const product = await getProductById(productId);
        if (product) {
          setValue('name', product.name);
          setValue('price', product.price);
          setValue('description', product.description);
        }
      };
      fetchProduct();
    }
  }, [productId, setValue, getProductById]);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      if (productId) {
        await updateProduct(productId, data);
      } else {
        await createProduct(data);
      }
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Product Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={`input ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="price" className="block">Price</label>
        <input
          id="price"
          type="number"
          {...register('price', { required: 'Price is required' })}
          className={`input ${errors.price ? 'border-red-500' : ''}`}
        />
        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
      </div>
      <div>
        <label htmlFor="description" className="block">Description</label>
        <textarea
          id="description"
          {...register('description')}
          className="input"
        />
      </div>
      <button type="submit" disabled={isLoading} className="btn">
        {isLoading ? 'Saving...' : 'Save Product'}
      </button>
    </form>
  );
};

export default ProductForm;