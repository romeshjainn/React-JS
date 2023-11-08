import { Router, Routes, Route } from "react-router-dom";
import CartLayout from "../CartProduct/Cart.layout";
import CartPage from "../CartProduct/cartPage";

const ProjectRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={CartLayout}>
          <Route path="/cart" element={CartPage} />
        </Route>
      </Routes>
    </Router>
  );
};

export default ProjectRouter;
