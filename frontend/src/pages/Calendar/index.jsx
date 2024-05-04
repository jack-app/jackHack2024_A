import { Link } from "react-router-dom";
import style from "./index.module.css";
// import RCalendar from "react-calendar";
function Calendar() {
  return (
    <div>
      <div>Calendar</div>
      {/* <RCalendar /> */}
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
