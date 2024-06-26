import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import RCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  const navigate = useNavigate();
  const today = modifyDate(new Date());
  const formattedDate = today.toISOString().slice(0, 10);

  function modifyDate(date) {
    const currentDate = date || new Date();
    const nextDayTimestamp = currentDate.getTime() + 9 * 60 * 60 * 1000;
    return new Date(nextDayTimestamp);
  }
  const handleDayClick = (date) => {
    const modifiedDate = modifyDate(date);
    const formattedSelectedDate = modifiedDate.toISOString().slice(0, 10);
    navigate(`/detail?date=${encodeURIComponent(formattedSelectedDate)}`);
  };

  return (
    <div>
      <h1 className={style.topDate}>{formattedDate}</h1>
      <h2>カレンダー</h2>
      <div className={style.RCalendarContainer}>
        <RCalendar onClickDay={(date) => handleDayClick(date)} />
      </div>
      <div>
        <div className={style.aorichanContainer}>
          <img className={style.circle} src="aorichan.png" width="25%" />
          <div className={style.bubble}>
            <p>日記を書くぞ</p>
          </div>
        </div>
        <span className={style.aorichanExplain}>
          扇のキャラクター アオリちゃん
        </span>
        <div className={style.link}>
          <Link to={`/write?date=${encodeURIComponent(formattedDate)}`}>
            日記を書く
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
