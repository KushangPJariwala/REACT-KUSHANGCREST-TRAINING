import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./context/CartContext.jsx";
import { UserProgressContextProvider } from "./context/UserProgressContext.jsx";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart/>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
