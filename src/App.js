import React, { useEffect, useState } from "react";
import Reducer from "./Reducer";
import Header from "./components/SearchHeader";
import ProductList from "./components/ProductList";
import { ProductsContext } from "./Context";
const App = () => {
  const [data, setState] = useState({ furniture_styles: [], products: [] });
  const { state, dispatch } = Reducer();

  useEffect(() => {
    async function fetchData() {
      //get the products and furniture styles
      const response = await fetch(
        "http://www.mocky.io/v2/5c9105cb330000112b649af8"
      );
      const data = await response.json();
      setState(data);
    }
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <Header furnitureStyle={data.furniture_styles} />
      <ProductList products={data.products} />
    </ProductsContext.Provider>
  );
};

export default App;
