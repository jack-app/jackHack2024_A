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
    <button className={style.gsiMaterialButton} onClick={loginUser ? logout : login}>
  <div className={style.gsiMaterialButtonState}></div>
  <div className={style.gsiMaterialButtonContentWrapper}>
    <div className={style.gsiMaterialButtonIcon}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block' }}>
 
  <path fill="#EA4335" d={`
    M24 9.5
    c3.54 0 6.71 1.22 9.21 3.6
    l6.85 -6.85
    C35.9 2.38 30.47 0 24 0
    C14.62 0 6.51 5.38 2.56 13.22
    l7.98 6.19
    C12.43 13.72 17.74 9.5 24 9.5
    z
  `} />

  <path fill="#4285F4" d={`
    M46.98 24.55
    c0 -1.57 -0.15 -3.09 -0.38 -4.55
    H24
    v9.02
    h12.94
    c-0.58 2.96 -2.26 5.48 -4.78 7.18
    l7.73 6
    c4.51 -4.18 7.09 -10.36 7.09 -17.65
    z
  `} />

  <path fill="#FBBC05" d={`
    M10.53 28.59
    c-0.48 -1.45 -0.76 -2.99 -0.76 -4.59
    s0.27 -3.14 0.76 -4.59
    l-7.98 -6.19
    C0.92 16.46 0 20.12 0 24
    c0 3.88 0.92 7.54 2.56 10.78
    l7.97 -6.19
    z
  `} />

  <path fill="#34A853" d={`
    M24 48
    c6.48 0 11.93 -2.13 15.89 -5.81
    l-7.73 -6
    c-2.15 1.45 -4.92 2.3 -8.16 2.3
    c-6.26 0 -11.57 -4.22 -13.47 -9.91
    l-7.98 6.19
    C6.51 42.62 14.62 48 24 48
    z
  `} />

  <path fill="none" d={`
    M0 0
    h48
    v48
    H0
    z
  `} />
</svg>

    </div>
    <span className={style.gsiMaterialButtonContents}>Googleでログイン</span>
    <span style={{ display: 'none' }}>Sign in with Google</span>
  </div>
</button>
    </div>
  );
}
export default Home
