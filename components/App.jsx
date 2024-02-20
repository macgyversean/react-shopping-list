import { useState } from "react";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState({});

  const generateList = (listItems) => {
    setShoppingListItems(listItems);
  };

  return (
    <>
      <h1>Shopping</h1>
      <ShoppingForm generateList={generateList} />
      <ShoppingList items={shoppingListItems} />
    </>
  );
}

export default App;
