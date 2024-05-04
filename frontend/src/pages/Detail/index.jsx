import { Link } from "react-router-dom";
import style from "./index.module.css";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    subject: '勉強',
    A: 4,
    fullMark: 5,
  },
  {
    subject: '健康',
    A: 3,
    fullMark: 5,
  },
  {
    subject: '社会性',
    A: 2,
    fullMark: 5,
  },
  {
    subject: '社交性',
    A: 5,
    fullMark: 5,
  },
  {
    subject: '精神力',
    A: 0,
    fullMark: 5,
  },
];


const data2 = [
  { name: '月', 勉強: 5, 健康: 2, 社会性: 0, 社交性: 1, 精神力: 4 },
  { name: '火', 勉強: 4, 健康: 4, 社会性: 2, 社交性: 0, 精神力: 1},
  { name: '水', 勉強: 3, 健康: 1, 社会性: 4, 社交性: 1, 精神力: 1 },
  { name: '木', 勉強: 1, 健康: 5, 社会性: 1, 社交性: 4, 精神力: 2 },
  { name: '金', 勉強: 4, 健康: 2, 社会性: 5, 社交性: 3, 精神力: 3 },
  { name: '土', 勉強: 0, 健康: 3, 社会性: 3, 社交性: 4, 精神力: 4 },
  { name: '日', 勉強: 5, 健康: 4, 社会性: 1, 社交性: 5, 精神力: 3 },
];

function Detail() {
  return (
    <div>
      <div>Detail</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>



      本日の評価だよ


      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
        <text x={300} y={30} textAnchor="middle" fontSize={20}>点数</text>
        <Radar
          name="chart"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>


      本日は合計15点で、もうちょっと努力が必要だぞ・・・・<br />
      特にここをやるともっといいかも！煽っちゃうよ。


      <LineChart width={500} height={300} data={data2}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <text x={300} y={30} textAnchor="middle" fontSize={20}>ウィークリーサマリー</text>
        <Legend />
        <Line type="linear" dataKey="勉強" stroke="#191970" />
        <Line type="linear" dataKey="健康" stroke="#ffa500" />
        <Line type="linear" dataKey="社会性" stroke="#008000" />
        <Line type="linear" dataKey="社交性" stroke="#7fffd4" />
        <Line type="linear" dataKey="精神力" stroke="#8b008b" />
      </LineChart>

    </div>
  );
}

export default Detail;
