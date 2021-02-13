import React from 'react';

const GroceryList = (props) => (
  <div>
    <h2>Hihihihi</h2>
    <strong>
    {props.listItems[0].itemName}
    </strong>: {props.listItems[0].itemQuanity}
    <strong>
    <br></br>
    {props.listItems[1].itemName}
    </strong>: {props.listItems[1].itemQuanity}
  </div>
);

export default GroceryList;