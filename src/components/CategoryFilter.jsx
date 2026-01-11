import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-3 text-lg">Categories</h3>
            <ul className="space-y-2">
                <li>
                    <button
                        onClick={() => onSelectCategory('all')}
                        className={`w-full text-left px-2 py-1.5 rounded transition-colors text-sm ${selectedCategory === 'all'
                                ? 'text-orange-600 font-medium bg-orange-50'
                                : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                            }`}
                    >
                        All Products
                    </button>
                </li>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => onSelectCategory(category)}
                            className={`w-full text-left px-2 py-1.5 rounded transition-colors text-sm capitalize ${selectedCategory === category
                                    ? 'text-orange-600 font-medium bg-orange-50'
                                    : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                                }`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
