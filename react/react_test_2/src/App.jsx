import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Gated from "./pages/Gated";
import Error from "./pages/Error";

const App = () => {
  {
    /* user 物件會模擬用戶的權限，請使用 user.role 來判斷用戶是否有對應權限  */
  }
  const user = {
    roles: ["user", "admin"],
  };

  return (
    <>
      <Home />
      <Products />
      <SingleProduct />
      <Gated />
      <Error />
    </>
  );
};

export default App;
