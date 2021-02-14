import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = ({listItems}) => (
  <div>
    <ul>
      {listItems.map((item) =>
      <li>
        <GroceryListItem item={item}/>
      </li>
      )}
    </ul>
  </div>
);

export default GroceryList;