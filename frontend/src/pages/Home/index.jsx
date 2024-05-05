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
      <div>Your Stock</div>
      <div className={style.logo}><img src="logo.jpg"/></div>
      <button className={style.login}></button>
    </div>
  );
}
export default Home
