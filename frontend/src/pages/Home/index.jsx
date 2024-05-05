import { Link } from "react-router-dom";
import style from "./index.module.css";
import { AuthContextConsumer } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const { loginUser, login, logout } = AuthContextConsumer();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginUser) {
      navigate("/calendar");
    }
  }, [loginUser, navigate]);

  return (
    <div>
      <div>Home</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Home;
