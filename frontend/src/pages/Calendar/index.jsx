import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import RCalendar from "react-calendar"; //名前の衝突を避けるためにRCalendarとしてimport
import "react-calendar/dist/Calendar.css";  //カレンダーのCSS
// import { useHistory } from "react-router-dom";

function Calendar() {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString();
  const handleDayClick = (date) => {
    navigate(`/detail?date=${encodeURIComponent(date.toLocaleDateString())}`);
  };
  return (
    <div>
      <h2 className={style.topDate}>{today}</h2>
      <h2>月間の状況</h2>
      <div className={style.RCalendarContainer}>
        <RCalendar
          onClickDay={(date) => handleDayClick(date)}
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
          <Link to={`/write?date=${encodeURIComponent(today)}`} >
            <img src="right-arrow-icon.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
