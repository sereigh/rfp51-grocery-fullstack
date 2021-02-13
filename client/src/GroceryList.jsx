import React from 'react';

const GroceryList = ({listItems}) => (
  <div>
    <ul>
      {listItems.map((item) =>
      <li>
        <span>{item.itemName}  </span>
        <span>{item.itemQuanity}  </span>
      </li>
      )}
    </ul>
  </div>
);

export default GroceryList;