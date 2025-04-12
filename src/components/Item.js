import React, { useState } from "react";

function Item({ name, category }) {
  // useState to manage the "in-cart" state
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function for the "Add to Cart" button
  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  // Determine the class based on the "in-cart" state
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
