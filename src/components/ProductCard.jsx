import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100 overflow-hidden group">
            <Link to={`/product/${product.id}`} className="block relative pt-[100%] overflow-hidden bg-white">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
            </Link>

            <div className="p-3 flex flex-col flex-grow">
                <Link to={`/product/${product.id}`} className="hover:text-orange-500 transition-colors">
                    <h3 className="text-sm text-gray-800 line-clamp-2 mb-1 leading-snug min-h-[2.5rem]" title={product.title}>
                        {product.title}
                    </h3>
                </Link>

                <div className="mt-auto">
                    <div className="flex items-center gap-1 mb-1">
                        <FaStar className="text-yellow-400 text-xs" />
                        <span className="text-xs text-gray-500">
                            {product.rating?.rate} ({product.rating?.count})
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-orange-500 text-lg font-semibold">
                            ${product.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
