import { useState } from "react";
import ShoppingForm from "./components/shoppingForm";
import ShoppingList from "./components/shoppingList";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState({});

  // Yep, we can pass functions as props!
  const generateList = (listItems) => {
    setShoppingListItems(listItems);
  };

  return (
    <>
      <h1>Time to go Shopping</h1>
      <ShoppingForm generateList={generateList} />
      <ShoppingList items={shoppingListItems} />
    </>
  );
}

export default App;
