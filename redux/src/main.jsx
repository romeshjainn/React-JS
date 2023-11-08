import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ProductPage from "./ProductsPage/Products.Layout.jsx";
import { Provider } from "react-redux";
import CartLayout from "./CartProduct/Cart.layout.jsx";
import store from "./store.js";
import ProjectRouter from "./ProjectRouter/projectRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ProductPage /> */}
      <CartLayout />
      {/* <ProjectRouter/> */}
    </Provider>
  </React.StrictMode>
);
