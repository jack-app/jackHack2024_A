import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const evaluateDiary = async (diary_text) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "assistant",
        content:
          "あなたはこれから日記を精読し、勉強、健康、社会性、社交性、精神力の5つの観点で筆者の1日の生活について評価します。5つの観点はそれぞれ、1, 2, 3, 4, 5の5段階評価で行ってください。これに加えて、評価の理由について50〜100字程度の文章で述べてください。",
      },
      {
        role: "assistant",
        content:
          '出力は以下の形式のJSONで行ってください。```{    "feedback": "今日もよく頑張ったね!色々な人と話してて社会性がとても高いと思うよ！ただ、全然勉強してないよね？その状況で焦らないメンタルはすごいと思うよ。",    "point": {        "study": 1,        "healthy": 2,        "sociality": 3,        "sociability": 4,        "mental": 5    }}```',
      },
      {
        role: "user",
        content: diary_text,
      },
    ],
  });

  const feedback = JSON.parse(response.choices[0].message.content);

  return feedback;
};
