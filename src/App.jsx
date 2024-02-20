import { useState } from "react";
import "./App.css";
import ShoppingForm from "../components/shoppingForm";
import ShoppingList from "../components/shoppingList";

function App() {
  const [someText, setSomeText] = useState("");
  const getFormData = (text) => {
    setSomeText(text);
  };
  return (
    <>
      <h1>Form Demo</h1>
      <ShoppingForm action={getFormData} />
    </>
  );
}

export default App;
