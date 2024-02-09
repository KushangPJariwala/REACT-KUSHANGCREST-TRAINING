import { useSelector ,UseDispatch, useDispatch} from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";
import { useDebugValue } from "react";

const Header = () => {
  const isLogged = useSelector((state) => state.auth.logged);
  const dispatch = useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLogged && (
            <>
              {" "}
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
