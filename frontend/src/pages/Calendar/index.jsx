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
      <h3>{today} 月間の状況だぞ</h3>
      <RCalendar
        value={value}
        onClickDay={(e) => { setValue(e); console.log(e); }}
      />
      <div>
        <div>
          <img src="aorichan.png" />
          <p>扇のキャラクター アオリちゃん</p>
        </div>
        <dir>
          <p>日記を書くぞ</p>
          <Link>
            <img src="right-arrow-icon.svg" />
          </Link>
        </dir>
      </div>

    </div>
  );
}

export default Calendar;
