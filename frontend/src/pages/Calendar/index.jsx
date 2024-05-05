import { Link } from "react-router-dom";
import style from "./index.module.css";
import RCalendar from "react-calendar"; //名前の衝突を避けるためにRCalendarとしてimport
import "react-calendar/dist/Calendar.css";  //カレンダーのCSS
import { useState } from "react";

function Calendar() {
  const [value, setValue] = useState();
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h2 className={style.topDate}>{today}</h2>
      <h2>月間の状況</h2>
      <div className={style.RCalendarContainer}>
        <RCalendar
          value={value}
          onClickDay={(e) => { setValue(e); console.log(e); }}
        />
      </div>
      <div>
        <div className={style.aorichanContainer}>
          <img className={style.circle} src="aorichan.png" width="25%" />
          <div className={style.bubble}>
            <p>日記を書くぞ</p>
          </div>
        </div>
        <span className={style.aorichanExplain}>扇のキャラクター アオリちゃん</span>
        <div className={style.rightArrowIcon}>
          <Link to={{
            pathname: "/write",
            state: { date: today }
          }} >
            <img src="right-arrow-icon.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
