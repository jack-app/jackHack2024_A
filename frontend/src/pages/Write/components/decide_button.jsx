import style from "../index.module.css";
import { createNewDiary } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";

// eslint-disable-next-line react/prop-types
export default function DecideButton({ text }) {
  const { loginUser } = AuthContextConsumer();
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

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
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "assistant",
          content:
            "あなたはこれから日記を精読し、勉強、健康、社会性、社交性、精神力の5つの観点で筆者の1日の生活について評価します。5つの観点はそれぞれ、0, 1, 2, 3, 4, 5の6段階評価で行ってください。これに加えて、評価の理由について200文字以内の文章で述べてください。",
        },
        {
          role: "assistant",
          content:
            '出力は以下の形式のJSONで行ってください。```{    "feedback": "よく頑張ったね!",    "point": {        "study": 1,        "healthy": 2,        "sociality": 3,        "sociability": 4,        "mental": 5    }}```',
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const feedback = JSON.parse(response.choices[0].message.content);
    console.log(feedback);

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
      <img src="kakutei_bottom.png" onClick={save} />
    </div>
  );
}
