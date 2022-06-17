import { FC, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  useAuthActions,
  useCartActions,
  useProductActions,
} from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectore";
import { useAuth } from "../../store/action-creators/auth";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const MyNavbar: FC = () => {
  // toggle
  const [searchToggleButton, setSearchToggleButton] = useState(false);
  const [loginToggleButton, setLoginToggleButton] = useState(false);
  const [menuToggleButton, setMenuToggleButton] = useState(false);
  const [cartToggleButton, setCartToggleButton] = useState(false);
  const [isLoginButton, setIsLoginButton] = useState(false);

  const { cart, error } = useTypedSelector((state) => state.cart);

  const { changeCountProduct, getCartProduct, deleteProductCart } =
    useCartActions();
  const { logout, signUp, signIn } = useAuthActions();
  const { getProduct } = useProductActions();

  const [authValue, setAuthValue] = useState({ email: "", password: "" });
  const [search, setSearch] = useState("");
  const user = useAuth();

  useMemo(() => {
    getProduct();
    return () => {
      getProduct();
    };
  }, [search]);

  useEffect(() => {
    getCartProduct();

    return () => {
      getCartProduct();
    };
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleSignIn = (event: any) => {
    event.preventDefault();
    if (!authValue.email || !authValue.email) {
      alert("заполните все поля");
      return;
    }
    signIn(authValue.email, authValue.password);
    setAuthValue({ email: "", password: "" });
  };
  const handleSignUp = (event: any) => {
    event.preventDefault();
    if (!authValue.email || !authValue.email) {
      alert("заполните все поля");
      return;
    }
    signUp(authValue.email, authValue.password);
    setAuthValue({ email: "", password: "" });
  };

  return (
    <header className="header">
      <img
        src="https://images.prismic.io/madecritical/Yjk0ZjI4YWYtNGRmMS00OWIwLTlmOGItNDY3MGNiYmIwODg5_721c9359-5372-46e5-a4ff-f556976c086c_made_grid.logo_animation_cropped.gif?auto=compress,format"
        width="60px"
        height="60px"
        alt=""
      />

      {/* //! menu burger start */}
      <nav className={`navbar ${menuToggleButton ? "active" : null}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/about"}>About </Link>

        {user?.email === "admin@gmail.com" ? (
          <Link to={"/admin"}>Admin</Link>
        ) : null}
      </nav>
      {/* menu burger start */}
      {/* //! Icons start */}
      <div className="icons">
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={() => setMenuToggleButton(!menuToggleButton)}
        >
          <MenuIcon />
        </div>

        <div
          id="search-btn"
          className="fas fa-search"
          onClick={() => setSearchToggleButton(!searchToggleButton)}
        >
          <SearchIcon />
        </div>

        <div
          id="cart-btn"
          className="fas fa-shopping-cart"
          onClick={() => setCartToggleButton(!cartToggleButton)}
        >
          <ShoppingCartIcon />
        </div>

        <div
          id="login-btn"
          className="fas fa-user"
          onClick={() => setLoginToggleButton(!loginToggleButton)}
        >
          <AccountCircleIcon />
        </div>
      </div>
      {/* ICons end */}
      {/* //! search input start */}
      <form
        action=""
        className={`search-form ${searchToggleButton ? "active" : null} `}
      >
        <input
          type="search"
          placeholder="Поиск ..."
          id="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>
      {/* search input end*/}
      {/* //! Cart start */}
      <div className={`shopping-cart ${cartToggleButton ? "active" : null}`}>
        {cart.products ? (
          cart.products.map((elem: any) => (
            <div className="box" key={elem.item.id}>
              <i
                className="fas fa-times"
                onClick={() => deleteProductCart(elem.item.id, elem.item.price)}
              />

              <img src={elem.item.photo} alt={elem.item.title} />
              <div className="content">
                <h3>{elem.item.title}</h3>

                <input
                  type={"number"}
                  min="1"
                  value={elem.count}
                  onChange={(e) =>
                    changeCountProduct(+e.target.value, elem.item.id)
                  }
                />

                <span className="multiply">x</span>
                <span className="price">$: {elem.item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <h1>Empty</h1>
        )}
        <h3 className="total">
          {" "}
          total : <span>{cart.totalPrice}</span>
        </h3>
        <Link
          to={""}
          className="btn"
          onClick={() => setCartToggleButton(!cartToggleButton)}
        >
          checkout cart
        </Link>
      </div>
      {/*  cart end */}

      {/* //! Register start */}
      {isLoginButton ? (
        !user ? (
          <form
            action=""
            className={`login-form ${loginToggleButton ? "active" : null}`}
          >
            <h3>Login</h3>

            <input
              value={authValue.email}
              onChange={(e) =>
                setAuthValue({ ...authValue, email: e.target.value })
              }
              type="email"
              placeholder="email "
              className="box"
            />

            <input
              value={authValue.password}
              onChange={(e) =>
                setAuthValue({ ...authValue, password: e.target.value })
              }
              type="password"
              placeholder="password"
              className="box"
            />

            <input
              type="submit"
              value="Sign In"
              className="btn"
              onClick={handleSignIn}
            />

            <p>
              Don't have an account?
              <Link to={""} onClick={() => setIsLoginButton(!isLoginButton)}>
                Sign Up
              </Link>
            </p>
          </form>
        ) : (
          <span
            className={`login-form ${loginToggleButton ? "active" : null}`}
            style={{ width: "230px" }}
          >
            <input
              type="submit"
              value="Logout"
              className="btn"
              style={{ width: "200px" }}
              onClick={logout}
            />
          </span>
        )
      ) : !user ? (
        <form
          action=""
          className={`login-form ${loginToggleButton ? "active" : null}`}
        >
          <h3>Register</h3>

          <input
            value={authValue.email}
            onChange={(e) =>
              setAuthValue({ ...authValue, email: e.target.value })
            }
            type="email"
            placeholder="Email"
            className="box"
          />

          <input
            value={authValue.password}
            onChange={(e) =>
              setAuthValue({ ...authValue, password: e.target.value })
            }
            type="password"
            placeholder="password"
            className="box"
          />

          <input
            type="submit"
            value="регистрация"
            className="btn"
            onClick={handleSignUp}
          />

          <p>
            Have an acccount?
            <Link to={""} onClick={() => setIsLoginButton(!isLoginButton)}>
              Sign In
            </Link>
          </p>
        </form>
      ) : (
        <span
          className={`login-form ${loginToggleButton ? "active" : null}`}
          style={{ width: "230px" }}
        >
          <h4 style={{ textAlign: "center" }}>USER:{user.email}</h4>
          <input
            type="submit"
            value="Logout"
            className="btn"
            style={{ width: "200px" }}
            onClick={logout}
          />
        </span>
      )}
    </header>
  );
};
export default MyNavbar;
