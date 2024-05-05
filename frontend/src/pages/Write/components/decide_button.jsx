import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { currentDate } from "../../../utils/date";
import { evaluateDiary } from "../../../utils/openai";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function DecideButton({ text }) {
  const { loginUser } = AuthContextConsumer();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
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
        alert("日記の保存に失敗しました。もう一度お試しください。");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div className={style.submitbutton}>
      <img src="kakutei_bottom.png" onClick={handleClick} />
    </div>
  );
}
