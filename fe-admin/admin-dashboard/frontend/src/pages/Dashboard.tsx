import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default Dashboard;