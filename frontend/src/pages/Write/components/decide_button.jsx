import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { currentDate } from "../../../utils/date";
import { evaluateDiary } from "../../../utils/openai";

// eslint-disable-next-line react/prop-types
export default function DecideButton({ text }) {
  const { loginUser } = AuthContextConsumer();
  const navigate = useNavigate();

  const handleClick = async () => {
    const feedback = await evaluateDiary(text);

    await createNewDiary(
      loginUser.uid,
      currentDate,
      {
        study: feedback.point.study,
        healthy: feedback.point.healthy,
        sociality: feedback.point.sociality,
        sociability: feedback.point.sociability,
        mental: feedback.point.mental,
      },
      text,
      feedback.feedback
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
      <img src="kakutei_bottom.png" onClick={handleClick} />
    </div>
  );
}
