import { Link } from "react-router-dom";
import style from "./index.module.css";

function Home() {
  return (
    <div>
      <div>Your Stock</div>
      <div className="logo"><img src="logo.jpg"/></div>
      
      
<nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">ホーム</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Home;
