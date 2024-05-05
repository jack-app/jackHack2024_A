import { Link } from "react-router-dom";
import style from "./index.module.css";
import { AuthContextConsumer } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  const { loginUser, userID, login, logout } = AuthContextConsumer();
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
      <div className="user_info">
      <p className="user_name">
        {loginUser ? loginUser.displayName : "ゲスト"}
      </p>
      <button className="login_btn" onClick={loginUser ? logout : login}>
        {loginUser ? "logout" : "login"}
      </button>
    </div>
    </div>
  );
}
export default Home
