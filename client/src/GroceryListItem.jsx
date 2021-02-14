import React from 'react';

const GroceryListItem = ({item}) => (
  <div>
    <span>{item.itemName}  </span>
    <span>{item.itemQuanity}  </span>
  </div>
);

export default GroceryListItem;