import { Link } from "react-router-dom";

function Calendar() {
  return (
    <div>
      <div>Calendar</div>
      <Link to="/write">write</Link>
      <Link to="/detail">detail</Link>
      <Link to="/calendar">calendar</Link>
      <Link to="/">home</Link>
    </div>
  );
}

export default Calendar;
