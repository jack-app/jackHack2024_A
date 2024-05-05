import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DecideButton(text) {

    const { loginUser, login, logout } = AuthContextConsumer();

    const date = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll('/', '-')

    const navigate = useNavigate();

    const save = () => {
        console.log(text);
        createNewDiary(
            loginUser.uid,
            date,
            {
                study:0,
                healthy:0,
                sociality:0,
                sociability:0,
                mental:0
            },
            text.text,
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