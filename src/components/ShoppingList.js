// import React from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {

//   const [selectedCategory,setSelectedCategory]=React.useState(null);
  
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };
//   // Filter by category:
//   let filteredItems = items;
//   if (selectedCategory) {
//     filteredItems = items.filter((item)=> item.category === selectedCategory );
//   }
//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter">
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter by category:
  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
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