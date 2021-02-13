import React from "react";
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [{itemName: "soda", itemQuanity: 2}, {itemName: "cheese-its", itemQuanity: 2}]
    };
    //bind
  }
  //handlers
  //lifecycle
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
          <GroceryList listItems={this.state.listItems}/>
      </div>
    );
  }
};

export default App;

