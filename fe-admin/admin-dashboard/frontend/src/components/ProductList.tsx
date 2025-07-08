import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProducts, deleteProduct } from '../hooks/useProducts';

const ProductList: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: products, isLoading, isError } = useQuery('products', fetchProducts);
    const mutation = useMutation(deleteProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('products');
        },
    });

    const handleDelete = (id: string) => {
        mutation.mutate(id);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products.</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="py-2 px-4 border-b">{product.id}</td>
                            <td className="py-2 px-4 border-b">{product.name}</td>
                            <td className="py-2 px-4 border-b">${product.price}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;