import { Link } from "react-router-dom";
import style from "./index.module.css";

function Detail() {
  return (
    <div>
      <div>Detail</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Detail;
