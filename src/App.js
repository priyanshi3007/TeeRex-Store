import React from "react";
import AllRoutes from "./routes/Allroutes";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <div>
        <AllRoutes />
      </div>
    </ProductProvider>
  );
};

export default App;
