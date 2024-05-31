import React, { useState, useEffect } from 'react';
import Product  from './Product'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.categories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto pb-8">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-3 my-8 gap-24">
        {products.map((category) => (
          <Product key={category.idCategory} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Products;
