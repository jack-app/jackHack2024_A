import { Link } from "react-router-dom";
import style from "./index.module.css";

function Write() {
  return (
    <div>
       <Link to="/calendar">
       <img src="back_button.png"></img>
       </Link>
      <div>20XX/XX</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
        <textarea></textarea>
        <Link to="/calendar">
        <img src="kakutei_bottom.png"></img>
       </Link>
      </nav>
    </div>
  );
}




export default Write;
