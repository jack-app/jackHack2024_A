import { Link } from "react-router-dom";
import style from "./index.module.css";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import RaderChartWrapper from "./components/RaderChart";
import CommentWrapper from "./components/Comment";
import FeedBackWrapper from "./components/FeedBack";


const data2 = [
  { name: '月', 勉強: 5, 健康: 2, 社会性: 0, 社交性: 1, 精神力: 4 },
  { name: '火', 勉強: 4, 健康: 4, 社会性: 2, 社交性: 0, 精神力: 1 },
  { name: '水', 勉強: 3, 健康: 1, 社会性: 4, 社交性: 1, 精神力: 1 },
  { name: '木', 勉強: 1, 健康: 5, 社会性: 1, 社交性: 4, 精神力: 2 },
  { name: '金', 勉強: 4, 健康: 2, 社会性: 5, 社交性: 3, 精神力: 3 },
  { name: '土', 勉強: 0, 健康: 3, 社会性: 3, 社交性: 4, 精神力: 4 },
  { name: '日', 勉強: 5, 健康: 4, 社会性: 1, 社交性: 5, 精神力: 3 },
];

function Detail() {

  return (
    <div>
      {/*
      <div>Detail</div>
      <nav className={style.navigation}>
        <Link to="/write">write</Link>
        <Link to="/detail">detail</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/">home</Link>
      </nav>
  */}
      <h2>日記</h2>

      <CommentWrapper />

      <h2>フィードバック</h2>
      <h3>点数</h3>
      <div className={style.txtbox}>
        <RaderChartWrapper/>
      </div>

      <FeedBackWrapper />

      <h3>ウィークリーサマリー</h3>
      <div className={style.txtbox}>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={data2}>
            <XAxis dataKey="name" interval={0} />
            <YAxis domain={[0, 5]} tickCount={6} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="勉強" stroke="#191970" />
            <Line type="linear" dataKey="健康" stroke="#ffa500" />
            <Line type="linear" dataKey="社会性" stroke="#008000" />
            <Line type="linear" dataKey="社交性" stroke="#7f99d4" />
            <Line type="linear" dataKey="精神力" stroke="#8b008b" />
          </LineChart>
        </ResponsiveContainer>
      </div> </div>
  );
}



export default Detail;
