import { Link } from "react-router-dom";
import style from "./index.module.css";
import DecideButton from "./components/decide_button";
import { useState } from "react";

function Write() {
  const [text, setText] = useState("");

  return (
    <div>
      <div className={style.flex}>
        <Link className={style.flex} to="/calendar">
          <img src="back_button.png"></img>
        </Link>
        <div className={style.flex}></div>
      </div>
      <center>
        <textarea
          placeholder="日記を入力"
          className={style.inputbox}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className={style.hoge}>
          <DecideButton text={text} />
        </div>
      </center>
    </div>
  );
}

export default Write;
