import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store";


function App() {
  const isLogged = useSelector((state) => state.auth.logged);
  return (
    <>
      <Header />
      {!isLogged && <Auth />}
      {isLogged && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
