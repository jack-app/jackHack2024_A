import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DecideButton(text, date) {

    const { loginUser, userID, login, logout } = AuthContextConsumer();

    const navigate = useNavigate();

    const save = () => {
        createNewDiary(
            userID,
            date,
            0,
            0,
            0,
            0,
            0,
            text,
            "hogehoge"
        );
        navigate("/detail");
    }

    return (
        <div className={style.submitbutton}>
            <img src="kakutei_bottom.png" onClick={save} />
        </div>
    );
}