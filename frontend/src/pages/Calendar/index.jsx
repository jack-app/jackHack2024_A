import { Link } from "react-router-dom";
import style from "./index.module.css";
import RCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";  //カレンダーのCSS
import { useState } from "react";

function Calendar() {
  const [value, setValue] = useState();
  return (
    <div>
      <div>Calendar</div>
      <RCalendar
        value={value}
        onClickDay={(e) => { setValue(e); console.log(e); }}
      />
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Calendar;
