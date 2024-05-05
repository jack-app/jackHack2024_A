import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DecideButton({ text }) {
  const { loginUser } = AuthContextConsumer();

  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");

  const navigate = useNavigate();

  const save = async () => {
    // chatGPTによる文章生成

    await createNewDiary(
      loginUser.uid,
      currentDate,
      {
        study: 0,
        healthy: 0,
        sociality: 0,
        sociability: 0,
        mental: 0,
      },
      text,
      ""
    )
      .then(() => {
        navigate(`/detail?date=${currentDate}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={style.submitbutton}>
      <img src="kakutei_bottom.png" onClick={save} />
    </div>
  );
}
