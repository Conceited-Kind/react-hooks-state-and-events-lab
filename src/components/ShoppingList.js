import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // useState to manage the selected filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for filter change
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
