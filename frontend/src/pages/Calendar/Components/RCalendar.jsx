import CalendarComponent from "react-calendar";
import { useNavigate } from "react-router-dom";

const RCalendar = () => {
    const navigate = useNavigate();

    const handleDayClick = (date) => {
        const modifiedDate = new Date(date.getTime() + (9 * 60 * 60 * 1000));
        const formattedSelectedDate = modifiedDate.toISOString().slice(0, 10);
        navigate(`/detail?date=${encodeURIComponent(formattedSelectedDate)}`);
    };

    return (
        <CalendarComponent onClickDay={handleDayClick} />
    );
}

export default RCalendar;