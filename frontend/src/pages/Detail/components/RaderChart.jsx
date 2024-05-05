import { getDiaryDataByDate } from "../../../utils/database";
import { AuthContextConsumer } from "../../../contexts/AuthContext";
import { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import style from "./../index.module.css";
export default function RaderChartWrapper(){

  const { loginUser, userID, login, logout } = AuthContextConsumer();

  const [data, setData] = useState([]);

  const date = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
  day: "2-digit"}).replaceAll('/', '-')

  getDiaryDataByDate(userID, date).then((target) => {
    if (target.length == 0) {
      setData([])
    }
    else {
      setData([
          {
            subject: '勉強',
            A: target[0].healthy,
            fullMark: 5,
          },
          {
            subject: '健康',
            A: target[0].sociality,
            fullMark: 5,
          },
          {
            subject: '社会性',
            A: target[0].sociability,
            fullMark: 5,
          },
          {
            subject: '社交性',
            A: target[0].mental,
            fullMark: 5,
          },
          {
            subject: '精神力',
            A: target[0].mental,
            fullMark: 5,
          }
      ])
    }
  })

  if(data.length === 0){
    return (
<div className={style.overlap}>
        <img src="aorichan.png" width="100%" className={style.transparent}/>
        <div  className={style.overlay}>
          <p><strong>データがありません</strong></p>
        </div>
      </div>
    );
  }

  return(
    <ResponsiveContainer width="100%" aspect={1.5}>
      <RadarChart data={data}>

        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
        <Radar
          name="chart"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}