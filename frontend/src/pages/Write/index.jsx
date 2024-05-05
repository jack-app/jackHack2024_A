import { Link } from "react-router-dom";
import style from "./index.module.css";

function Write() {
  return (
    <div>
      <div className={style.flex}>
        <Link className={style.flex} to="/calendar">
          <img src="back_button.png"></img>
        </Link>
        <div className={style.flex}>20XX/XX</div>
      </div>
      <center>
        <textarea className={style.inputbox}></textarea>
          <div className={style.hoge}>
        <Link className={style.submitbuttom} to="/detail">
          <img src="kakutei_bottom.png"></img>
        </Link>
      </div>
      </center>
    </div>
  );
}




export default Write;
