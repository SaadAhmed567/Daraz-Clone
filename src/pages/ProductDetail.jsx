import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <Spinner />;
    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="flex justify-center items-center bg-white p-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[400px] object-contain w-full"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2 leading-tight">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < Math.round(product.rating?.rate) ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>
                                <span className="text-sm text-blue-500 ml-1">{product.rating?.count} Ratings</span>
                            </div>
                            <span className="text-gray-300">|</span>
                            <span className="text-sm text-gray-500">Brand: <span className="text-blue-500">Generic</span></span>
                        </div>

                        <div className="border-t border-b border-gray-100 py-4 mb-6">
                            <span className="text-orange-500 text-4xl font-semibold block mb-2">
                                ${product.price}
                            </span>
                            <span className="text-sm text-gray-500 block">
                                Category: <span className="capitalize">{product.category}</span>
                            </span>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-gray-700 font-medium mb-2">Product Details</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded shadow transition-colors">
                                Buy Now
                            </button>
                            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded shadow transition-colors flex items-center justify-center gap-2">
                                <FaShoppingCart /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
