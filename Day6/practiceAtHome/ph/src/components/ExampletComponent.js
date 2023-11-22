import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ExampleComponent = () => {
  const { categories, priceFilter, setPriceFilter } =
    useContext(ProductContext);

  // Handle filter changes
  const handlePriceFilterChange = (min, max) => {
    setPriceFilter({ min, max });
  };

  // Render products based on categories and price filters
  // Implement your filtering logic here

  return (
    <div>
      {/* Display categories */}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      {/* Implement Price Range Filter */}
      <input
        type="range"
        min="0"
        max="1000"
        onChange={(e) => handlePriceFilterChange(e.target.value)}
      />

      {/* Display products based on filters */}
      {/* Implement logic to display products based on selected category and price range */}
    </div>
  );
};

export default ExampleComponent;
